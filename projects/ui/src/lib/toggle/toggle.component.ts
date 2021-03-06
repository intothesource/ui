import { Component, OnInit, Input, ViewEncapsulation, HostBinding, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { generate } from 'shortid';
import { noop } from 'rxjs';

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
export class ToggleComponent
  implements OnInit, ControlValueAccessor {

  onChange: any = noop;
  onTouch: any = noop;

  @HostBinding('class')
  classes = 'its-toggle';

  private $name: string;
  @Input()
  set name(val: string) { this.$name = val; }
  get name() { return this.$name; }

  private $id: string;
  @Input()
  set id(val: string) { this.$id = val; }
  get id() { return this.$id; }

  private $value = false;
  @Input()
  set value(val: boolean) {
    if (val !== undefined && this.$value !== val) {
      this.$value = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }
  get value(): boolean {
    return this.$value;
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  onCheckboxChange(val: any, $event: Event) {
    this.value = !val;
  }

  ngOnInit() {
    if (!this.$id) { this.$id = generate(); }
    if (!this.$name) { this.$name = generate(); }
  }

}
