import {
  Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef, ViewEncapsulation, HostBinding, Input
} from '@angular/core';

@Component({
  selector: '[its-ripple-animation], its-ripple-animation',
  templateUrl: './ripple-animation.component.html',
  styleUrls: ['./ripple-animation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RippleAnimationComponent {

  @Input() color: string;

  constructor(private elementRef: ElementRef) {
  }

  rippleArray = [];
  holdingMouseDown = false;
  rippleScaleFactor = 2.3;

  @ViewChild('rippleContainer', { static: false }) rippleContainer: ElementRef;

  @HostListener('mouseup', ['$event'])
  handleMouseUp(event: MouseEvent) {
    if (event.button === 0) {
      this.holdingMouseDown = false;
    }
  }

  @HostListener('mousedown', ['$event'])
  handleMouseDown(event: MouseEvent) {
    if (event.button === 0) {
      this.holdingMouseDown = true;
      this.createRipple(event.offsetX, event.offsetY, this.containerBiggestDimension, this.color);
    }
  }

  @HostBinding('class')
  get classes() {
    return 'its-ripple-animation';
  }

  get containerBiggestDimension() {
    const dimensions = this.rippleContainer.nativeElement.getBoundingClientRect();
    if (dimensions.width > dimensions.height) {
      return dimensions.width * this.rippleScaleFactor;
    }
    return dimensions.height * this.rippleScaleFactor;
  }

  createRipple(x: number, y: number, biggestDimension: number, color: string) {
    const relativeX = (-biggestDimension / 2) + x;
    const relativeY = (-biggestDimension / 2) + y;
    this.rippleArray.push({ relativeX, relativeY, biggestDimension, color });
  }

  destroyRipple() {
    const mouseUpHandler = (() => {
      this.rippleArray.shift();
      this.elementRef.nativeElement.removeEventListener('mouseup', mouseUpHandler);
    }).bind(this);
    if (this.holdingMouseDown) {
      this.elementRef.nativeElement.addEventListener('mouseup', mouseUpHandler);
    } else {
      this.rippleArray.shift();
    }
  }
}

