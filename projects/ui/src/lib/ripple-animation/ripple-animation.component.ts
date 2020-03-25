import { Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

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

  @ViewChild('rippleContainer', { static: false }) rippleContainer: ElementRef;

  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent) {
    console.log('CLICKED:', event, this.rippleContainer);
    this.createRipple(0, 0, 'test');
  }

  @HostListener('mousedown', ['$event'])
  handleMouseDown(event: MouseEvent) {
    console.log('HOLDING:', event, this.rippleContainer);
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log('LOADED:', this.rippleContainer);
  }

  createRipple(x: number, y: number, color: string) {
    const newRipple = document.createElement('span');
    newRipple.classList.add('ripple');
    this.rippleContainer.nativeElement.appendChild(newRipple);
  }

}

