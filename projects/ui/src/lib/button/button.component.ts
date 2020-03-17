import { Component, ViewEncapsulation, HostBinding, Input } from '@angular/core';

/**
 * List of variants supported for this button
 */
export const SUPPORTED_COLORS = [
  'primary',
  'secondary',
];

@Component({
  selector: 'button[its-button], a[its-button], its-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {

  $disabled: boolean;

  @Input()
  color: string;

  @Input()
  outline: boolean;

  @Input()
  set disabled(val: boolean) { this.$disabled = val; }
  get disabled() { return this.$disabled; }

  @HostBinding('class')
  get classes() {
    const classes = ['its-button'];

    if (SUPPORTED_COLORS.includes(this.color)) {
      classes.push(`its-button--color-${this.color}`);
    }

    if (this.outline != null && this.outline !== false) {
      classes.push(`its-button--outline`);
    }

    if (this.disabled != null && this.disabled !== false) {
      classes.push(`its-button--disabled`);
    }

    return classes.join(' ');
  };

}
