import { Component, Input, ViewEncapsulation, forwardRef, HostBinding, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { noop } from 'rxjs';

@Component({
  selector: 'its-toggle-x',
  templateUrl: './toggle-x.component.html',
  styleUrls: ['./toggle-x.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleXComponent),
      multi: true
    }
  ]
})
export class ToggleXComponent
  implements ControlValueAccessor {

  onChange: any = noop;
  onTouch: any = noop;

  // Keep track of focus state internally
  private $focus = false;

  @HostBinding('class')
  classes = 'its-toggle-x';

  // Allow host element to take focus
  @HostBinding('tabIndex')
  tabIndex = '0';

  // Add [checked] attribute to host for styling/semantics
  // Whenever the value changes then the [checked] attribute is also updated
  // to let the DOM reflect the checked state as well.
  @HostBinding('attr.checked')
  get checked() {
    return this.value || null;
  }

  // Keep track of internal state and trigger the Angular ControlValueAccessor
  // when value has changed.
  private $value = false;
  @Input()
  set value(val: boolean) {
    if (val !== undefined && this.$value !== val) {
      this.$value = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }

  // Toggle just flips the value from true to false and vice versa
  toggle() {
    this.writeValue(!this.value);
  }

  // Clicking the host will toggle the control
  @HostListener('click')
  onClick() {
    this.toggle();
  }

  // Focus sets internal state
  @HostListener('focus')
  onFocus() {
    this.$focus = true;
  }

  // Blur sets internal state
  @HostListener('blur')
  onBlur() {
    this.$focus = false;
  }

  // Listen for keystrokes
  // If host has focus then allow space (keyCode 32) to toggle
  // Be sure to prevent default, otherwise spacebar will start scrolling
  @HostListener('window:keydown', ['$event'])
  onKeydown($event: KeyboardEvent) {
    if (!this.$focus) { return; }
    if ($event.keyCode === 32) {
      $event.preventDefault();
      return this.toggle();
    }
  }

  // Called by Angular when writing values to the internal state of the instance
  // of this component.
  writeValue(value: any) {
    this.value = value;
  }

  // Angular will call this to register an onChange method for the instance of
  // this component as part of the ControlValueAccessor logic.
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  // Angular will call this to register an onChange method for the instance of
  // this component as part of the ControlValueAccessor logic.
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

}
