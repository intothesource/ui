import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'its-ripple',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.css']
})
export class RippleComponent implements OnInit {

  @Input() x: number;
  @Input() y: number;
  @Input() color: string;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    console.log(this.x, this.y, this.color);
    this.setScale(100);
  }

  ngOnDestroy(): void {

  }

  setScale(scale: number) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `scale(${scale})`);
  }

}
