import { Component, OnInit, ViewChild, ElementRef, Input, ViewEncapsulation, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'its-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true
    }
  ]
})
export class ToggleComponent implements OnInit, ControlValueAccessor {

  @ViewChild('input', null) input: ElementRef;
  @ViewChild('label', null) label: ElementRef;

  @Input() toggleName: string;

  constructor() { }

  onChange: any = () => { }

  onTouch: any = () => { }

  val = false;

  @Input()
  set value(val: boolean) {  // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    console.log('set called', val);
    this.val = val
    this.onChange(val)
    this.onTouch(val)
    this.setState(val);
  }

  ngOnInit() {
    this.setRandomName(this.toggleName);
    this.linkElements(this.toggleName);
  }

  // this method sets the value programmatically
  writeValue(value: any) {
    this.value = value
  }

  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    this.onChange = fn
  }

  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

  setRandomName(name) {
    if (!name) {
      this.toggleName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
  }

  linkElements(name) {
    this.input.nativeElement.setAttribute('name', name);
    this.input.nativeElement.setAttribute('id', name);
    this.label.nativeElement.setAttribute('for', name);
  }

  setState(bool) {
    console.log('settting state');
    if (typeof this.val === "boolean") {
      console.log('set state', this.val);
      this.input.nativeElement.checked = bool;
    }
  }

}
