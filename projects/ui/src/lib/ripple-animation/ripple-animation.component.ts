import { Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef, ViewEncapsulation, HostBinding } from '@angular/core';
import { RippleComponent } from '../ripple/ripple.component';

export const maxRipples = 6;

@Component({
  selector: '[its-ripple-animation], its-ripple-animation',
  templateUrl: './ripple-animation.component.html',
  styleUrls: ['./ripple-animation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RippleAnimationComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  rippleAmount = 0;
  rippleAllowed = true;
  rippleArray = [];
  holdingMouseDown = false;
  baseColor = 'green';
  rippleTransitionEnded = false;

  @ViewChild('rippleContainer', { static: false }) rippleContainer: ElementRef;

  @HostListener('mouseup', ['$event'])
  handleMouseUp(event: MouseEvent) {
    this.holdingMouseDown = false;
    if (this.rippleTransitionEnded) {
      this.destroyRipple(this.rippleArray.pop());
    }
    console.log('CLICKED:', event, this.rippleContainer);
  }

  @HostListener('mousedown', ['$event'])
  handleMouseDown(event: MouseEvent) {
    this.holdingMouseDown = true;
    this.createRipple(event.offsetX, event.offsetY, this.containerBiggestDimension, 'test');
    console.log('HOLDING:', event.offsetX, event.offsetY, this.rippleContainer, this.containerBiggestDimension);
  }

  @HostBinding('class')
  get classes() {
    return 'its-ripple-animation';
  }

  get containerBiggestDimension() {
    const dimensions = this.rippleContainer.nativeElement.getBoundingClientRect();
    if (dimensions.width > dimensions.height) {
      return dimensions.width;
    }
    return dimensions.height;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log('LOADED:', this.rippleContainer);
  }

  createRipple(x: number, y: number, biggestDimension: number, color: string) {
    // const newRipple = document.createElement('span');

    // const mouseUpHandler = (() => {
    //   this.rippleContainer.nativeElement.removeEventListener('mouseup', mouseUpHandler);
    //   console.log('DESTROYING RIPPLE DUE TO EVENT');
    //   this.destroyRipple(newRipple);
    // }).bind(this);
    // newRipple.classList.add('ripple');
    // newRipple.style.left = `${x}px`;
    // newRipple.style.top = `${y}px`;
    // this.rippleContainer.nativeElement.appendChild(newRipple);
    // const newRipple = new RippleComponent(x, y, color);
    this.rippleArray.push({x, y, biggestDimension, color});
    // Get biggest dimension in pixels, multiply by 2 to accomodate for click location and use as scale.
    // newRipple.style.transform = `scale(${this.containerBiggestDimension * 2.3})`;
    this.rippleTransitionEnded = false;
    // newRipple.style.transform = `scale(1)`;
    // newRipple.addEventListener('transitionend', e => {
    //   this.rippleTransitionEnded = true;
    //   console.log('TRANSITION ENDED:', e, this.holdingMouseDown);
    //   if (this.holdingMouseDown) {
    //     // this.rippleContainer.nativeElement.addEventListener('mouseup', mouseUpHandler);
    //   } else {
    //     this.destroyRipple(newRipple);
    //   }
    // })
  }

  destroyRipple(rippleElement: Element) {
    rippleElement.remove();
  }

}

