import {
  Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef, ViewEncapsulation, HostBinding, Input
} from '@angular/core';
import { RippleComponent } from '../ripple/ripple.component';

export const maxRipples = 6;

@Component({
  selector: '[its-ripple-animation], its-ripple-animation',
  templateUrl: './ripple-animation.component.html',
  styleUrls: ['./ripple-animation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RippleAnimationComponent implements OnInit, AfterViewInit {

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
    this.holdingMouseDown = false;
    // if (this.rippleTransitionEnded) {
    //   this.rippleArray.pop();
    // }
    console.log('CLICKED:', event, this.rippleContainer);
  }

  @HostListener('mousedown', ['$event'])
  handleMouseDown(event: MouseEvent) {
    this.holdingMouseDown = true;
    this.createRipple(event.offsetX, event.offsetY, this.containerBiggestDimension, 'purple');
    console.log('HOLDING:', event.offsetX, event.offsetY, this.rippleContainer, this.containerBiggestDimension);
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

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log('LOADED:', this.rippleContainer);
  }

  createRipple(x: number, y: number, biggestDimension: number, color: string) {
    const dimensions = this.rippleContainer.nativeElement.getBoundingClientRect();
    // const relativeX = (-dimensions.width + (x + 70)) - (biggestDimension / 2);
    // const relativeY = (-dimensions.height + (y + -28)) - (biggestDimension / 2);
    const relativeX = (-biggestDimension / 2) + x;
    const relativeY = (-biggestDimension / 2) + y;
    console.log('RELATIVE DIMENSION', relativeX, relativeY);
    this.rippleArray.push({ relativeX, relativeY, biggestDimension, color });
    this.rippleTransitionEnded = false;
  }

  destroyRipple() {
    const mouseUpHandler = (() => {
      this.rippleArray.shift();
      this.rippleContainer.nativeElement.removeEventListener('mouseup', mouseUpHandler);
      console.log('DESTROYING RIPPLE DUE TO EVENT');
    }).bind(this);
    console.log('DESTROY TRIGGERD, HOLDING STATUS: ', this.holdingMouseDown);
    if (this.holdingMouseDown) {
      this.rippleContainer.nativeElement.addEventListener('mouseup', mouseUpHandler);
    } else {
      this.rippleArray.shift();
      console.log('DESTROYING RIPPLE DUE TO FUNCTION');
    }
  }

}

