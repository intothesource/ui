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

  constructor() {
  }

  rippleAmount = 0;
  rippleAllowed = true;
  rippleArray = [];
  holdingMouseDown = false;
  rippleTransitionEnded = false;

  @ViewChild('rippleContainer', { static: false }) rippleContainer: ElementRef;

  @HostListener('click', ['$event'])
  handleMouseUp(event: MouseEvent) {
    if (event.button === 0) {
      this.holdingMouseDown = false;
      console.log('MOUSE UP:', event, this.rippleContainer);
    }
  }

  @HostListener('mousedown', ['$event'])
  handleMouseDown(event: MouseEvent) {
    if (event.button === 0) {
      this.holdingMouseDown = true;
      this.createRipple(event.offsetX, event.offsetY, this.containerBiggestDimension, 'purple');
      console.log('HOLDING:', event.offsetX, event.offsetY, this.rippleContainer, this.containerBiggestDimension);
    }
  }

  @HostBinding('class')
  get classes() {
    return 'its-ripple-animation';
  }

  get containerBiggestDimension() {
    const dimensions = this.rippleContainer.nativeElement.getBoundingClientRect();
    if (dimensions.width > dimensions.height) {
      return dimensions.width * 2.3;
    }
    return dimensions.height * 2.3;
  }

  createRipple(x: number, y: number, biggestDimension: number, color: string) {
    const relativeX = (-biggestDimension / 2) + x;
    const relativeY = (-biggestDimension / 2) + y;
    this.rippleArray.push({ relativeX, relativeY, biggestDimension, color });
    this.rippleTransitionEnded = false;
  }

  destroyRipple() {
    const mouseUpHandler = (() => {
      this.rippleArray.shift();
      console.log('DESTROYING RIPPLE DUE TO EVENT');
      this.rippleContainer.nativeElement.removeEventListener('mouseup', mouseUpHandler);
    }).bind(this);
    console.log('DESTROY TRIGGERD, HOLDING STATUS: ', this.holdingMouseDown);
    if (this.holdingMouseDown) {
      console.log('ZOU NU EVENTLISTENER MOETEN TOEVOEGEN');
      this.rippleContainer.nativeElement.addEventListener('mouseup', mouseUpHandler);
    } else {
      this.rippleArray.shift();
      console.log('DESTROYING RIPPLE DUE TO FUNCTION');
    }
  }
}

