import { Component, OnInit, Input, Renderer2, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'its-ripple',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.css']
})
export class RippleComponent implements OnInit, OnDestroy {

  @Input() x: number;
  @Input() y: number;
  @Input() biggestDimension: number;
  @Input() color: string;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    console.log(this.x, this.y, this.color);
    // this.setScale(100);
    this.setRippleLocation(this.x, this.y);
    this.setRippleColor(this.color);
    this.setRippleSize(this.biggestDimension);

    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'scale(1)');
  }

  ngOnDestroy(): void {
    this.renderer.destroy();
  }

  setRippleSize(size: number) {
    // Calculate max ripple size and set as width and height
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${size*2.3}px`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', `${size*2.3}px`)
  }

  setRippleLocation(x: number, y: number) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'left', `${x}px`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'top', `${y}px`);
  }

  setRippleColor(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', color);
  }
  // setScale(scale: number) {
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `scale(${scale})`);
  // }

}