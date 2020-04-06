import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'its-ripple',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.css']
})
export class RippleComponent implements OnInit {

  @Input() x: number;
  @Input() y: number;
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.x, this.y, this.color);
  }

  ngOnDestroy(): void {

  }

}
