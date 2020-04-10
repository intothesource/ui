import { Component, OnInit, Input, Renderer2, ElementRef, OnDestroy, Output, EventEmitter } from '@angular/core';

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

  @Output() killMe = new EventEmitter();

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    console.log(this.x, this.y, this.color);
    // this.setScale(100);
    this.setRippleSize(this.biggestDimension);
    this.setRippleColor(this.color);
    this.setRippleLocation(this.x, this.y);
    setTimeout(() => {
      this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'scale(1)');
    }, 1);
    setTimeout(() => {
      this.killMe.emit();
    }, 300);
  }

  ngOnDestroy(): void {
    this.renderer.destroy();
  }

  setRippleSize(size: number) {
    // Calculate max ripple size and set as width and height
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${size}px`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', `${size}px`)
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
