import { Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef, ViewEncapsulation, HostBinding } from '@angular/core';

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

  @ViewChild('rippleContainer', { static: false }) rippleContainer: ElementRef;

  @HostListener('mouseup', ['$event'])
  handleMouseUp(event: MouseEvent) {
    this.holdingMouseDown = false;
    this.destroyRipple(this.rippleArray.pop());
    console.log('CLICKED:', event, this.rippleContainer);
  }

  @HostListener('mousedown', ['$event'])
  handleMouseDown(event: MouseEvent) {
    this.holdingMouseDown = true;
    this.createRipple(event.offsetX, event.offsetY, 'test');
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

  createRipple(x: number, y: number, color: string) {
    const newRipple = document.createElement('span');
    newRipple.classList.add('ripple');
    newRipple.style.left = `${x}px`;
    newRipple.style.top = `${y}px`;
    this.rippleContainer.nativeElement.appendChild(newRipple);
    this.rippleArray.push(newRipple);
    // Get biggest dimension in pixels, multiply by 2 to accomodate for click location and use as scale.
    newRipple.style.transform = `scale(${this.containerBiggestDimension * 2})`;
  }

  destroyRipple(rippleElement: Element) {
    rippleElement.remove();
  }

}

