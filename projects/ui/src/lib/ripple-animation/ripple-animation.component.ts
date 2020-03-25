import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

export const maxRipples = 6;

@Component({
  selector: '[its-ripple-animation], its-ripple-animation',
  templateUrl: './ripple-animation.component.html',
  styleUrls: ['./ripple-animation.component.css']
})
export class RippleAnimationComponent implements OnInit {

  constructor() {
  }

  rippleAmount = 0;
  rippleAllowed = true;

  @ViewChild('ripple-animation__container') rippleContainer !: ElementRef;

  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent) {
    console.log('CLICKED:', event);
  }

  ngOnInit() {

  }

}
