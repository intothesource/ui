import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: '[its-ripple-animation], its-ripple-animation',
  templateUrl: './ripple-animation.component.html',
  styleUrls: ['./ripple-animation.component.css']
})
export class RippleAnimationComponent implements OnInit {

  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent) {
    console.log('CLICKED:', event);
  }

  constructor() {
  }

  ngOnInit() {

  }

}
