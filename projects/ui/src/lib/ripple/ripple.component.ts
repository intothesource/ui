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
  }

  ngOnDestroy(): void {

  }

}
