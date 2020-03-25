import { Component, OnInit, HostListener } from '@angular/core';

export const maxRipples = 6;

@Component({
  selector: '[its-ripple-animation], its-ripple-animation',
  templateUrl: './ripple-animation.component.html',
  styleUrls: ['./ripple-animation.component.css']
})
export class RippleAnimationComponent implements OnInit {

  rippleAmount: number = 0;
  rippleAllowed: boolean = true;

  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent) {
    console.log('CLICKED:', event);
  }

  constructor() {
  }

  ngOnInit() {

  }

}
