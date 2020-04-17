import { Directive, HostListener, HostBinding, OnDestroy, ContentChild, ElementRef } from '@angular/core';
import { Subject, timer, combineLatest } from 'rxjs';
import { map, mergeMap, take, tap } from 'rxjs/operators';

import { ITSRxppleContainerComponent } from './rxpple-container.component';
import { Point } from './point';

@Directive({
  selector: '[itsRxpple]'
})
export class ITSRippleDirective
  implements OnDestroy {

  ANI_SPD = 275;

  @ContentChild(ITSRxppleContainerComponent)
  container: ITSRxppleContainerComponent;

  startEv$ = new Subject<Point>();
  endEv$ = new Subject<void>();

  sub = this.startEv$.pipe(
    map(({ x, y }) => ({ x, y, s: this.size })),
    map(({ x, y, s }) => ({ x: ((-s / 2) + x), y: ((-s / 2) + y), size: s })),
    map(params => this.container.createRxpple(params)),
    mergeMap(rxpple => combineLatest([this.endEv$, timer(this.ANI_SPD)]).pipe(
      map(() => this.container.destroyRxpple(rxpple)),
      take(1)
    ))
  ).subscribe();

  /**
   * @todo use style service to render a stylesheet for this
   */
  @HostBinding('class.its-rxpple-host')
  itsRxppleHostClassName = true;

  @HostListener('mousedown', ['$event.button', '$event.offsetX', '$event.offsetY'])
  onMousedown(button: MouseEvent['button'], x: MouseEvent['offsetX'], y: MouseEvent['offsetY']) {
    if (button !== 0) { return; }
    this.startEv$.next({ x, y });
  }

  @HostListener('mouseup')
  onMouseup() {
    this.endEv$.next();
  }

  constructor(private element: ElementRef) { }

  get rect(): ClientRect {
    return this.element.nativeElement.getBoundingClientRect()
  }

  get size() {
    const { width, height } = this.rect;
    const size = width > height ? width : height;
    return size * 3;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
