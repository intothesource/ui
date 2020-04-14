import { Directive, HostListener, OnInit, HostBinding, OnDestroy, ContentChild, ElementRef } from '@angular/core';
import { Subject, merge, timer, race, combineLatest, Subscription } from 'rxjs';
import { map, tap, mergeMap, takeUntil, take } from 'rxjs/operators';

import { ITSRxppleContainerComponent } from './rxpple-container.component';
import { Rxpple } from './rxpple';

/**
 * 1) mousedown or touchstart will initiate creation of the ripple animation
 * 2) mouseup, touchend, or the end of the animation will initiate destruction of the ripple
 */
@Directive({
  selector: '[itsRxpple]'
})
export class ITSRippleDirective
  implements OnInit, OnDestroy {

  @ContentChild(ITSRxppleContainerComponent)
  container: ITSRxppleContainerComponent;

  rxppleTriggerStart$ = new Subject<void>();
  rxppleTriggerEnd$ = new Subject<void>();
  rxppleTriggerStart$Sub: Subscription;

  @HostBinding('class.its-rxpple-host')
  itsRxppleHostClassName = true;

  @HostListener('mousedown')
  onMousedown() {
    this.rxppleTriggerStart$.next();
  }

  @HostListener('touchstart')
  onTouchstart() {
    this.rxppleTriggerStart$.next();
  }

  @HostListener('mouseup')
  onMouseup() {
    this.rxppleTriggerEnd$.next();
  }

  @HostListener('touchend')
  onTouchend() {
    this.rxppleTriggerEnd$.next();
  }

  // createRxpple() {
  //   // Do some calculations based on the container and create a ripple.
  //   return this.container.createRxpple(10, 10, 275, 275);
  // }

  // destroyRxpple(rxpple: Rxpple) {
  //   return this.container.destroyRxpple(rxpple);
  // }

  constructor(private element: ElementRef) {

  }

  getRect(): ClientRect {
    return this.element.nativeElement.getBoundingClientRect()
  }

  get size() {
    const { width, height } = this.getRect();
    const size = width > height ? width : height;
    return size;
  }

  ngOnInit() {
    this.rxppleTriggerStart$Sub = this.rxppleTriggerStart$.pipe(
      map(() => {
        return this.container.createRxpple({ size: this.size })
      }),
      mergeMap((ripple) => {
        return combineLatest([this.rxppleTriggerEnd$, timer(275)]).pipe(
          map(() => this.container.destroyRxpple(ripple)),
          take(1)
        );
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.rxppleTriggerStart$Sub.unsubscribe();
  }

}
