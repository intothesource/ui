import { Component, Input, ViewEncapsulation, forwardRef, HostBinding, HostListener, ElementRef, OnInit } from '@angular/core';
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
  implements ControlValueAccessor, OnInit {

  constructor(
    public elementRef: ElementRef<HTMLElement>,
  ) { }

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
  get value() {
    return this.$value;
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
    if (!this.$focus) {
      return;
    }
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

  ngOnInit() {

    if (
      this.elementRef.nativeElement
    ) {

      //
      // If the parent element is a `<label>`, then we have to propagate clicks
      // to the control element. Also pull focus to the control to emulate
      // default behaviour of the browser.
      //
      // Another way to deal with this, is by creating a `<its-form-label>`
      // component that does this in a more "Angular way".
      //

      if (
        this.elementRef.nativeElement.parentElement &&
        this.elementRef.nativeElement.parentElement.nodeName === 'LABEL'
      ) {
        this.elementRef.nativeElement.parentElement.addEventListener('click', ($event) => {
          $event.preventDefault();
          this.elementRef.nativeElement.focus();
          this.toggle();
        });
      }

      //
      // If this element has an `[id]` attribute then we'll go look for a
      // sibling label with the corresponding `[for]` attribute and emulate
      // the native behavior of the browser here as well.
      //
      // As with the wrapped `<label>` above, this can also be done in a more
      // "Angular way" by using a custom parent component/directive that links
      // their host elements and behaviors together.
      //

      if (
        this.elementRef.nativeElement.id &&
        this.elementRef.nativeElement.parentElement
      ) {
        const labelElement = this.elementRef.nativeElement.parentElement.querySelector(`[for="${this.elementRef.nativeElement.id}"]`);
        if (labelElement == null) { return; }
        labelElement.addEventListener('click', ($event) => {
          $event.preventDefault();
          this.elementRef.nativeElement.focus();
          this.toggle();
        });
      }
    }
  }

}
