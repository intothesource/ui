import { Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef } from '@angular/core';

export const maxRipples = 6;

@Component({
  selector: '[its-ripple-animation], its-ripple-animation',
  templateUrl: './ripple-animation.component.html',
  styleUrls: ['./ripple-animation.component.css']
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
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log('LOADED:', this.rippleContainer);
  }

}

