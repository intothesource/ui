import { Component, ViewEncapsulation, HostBinding, Input } from '@angular/core';

/**
 * List of variants supported for this button
 */
export const SUPPORTED_COLORS = [
  'primary',
  'secondary',
];

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button[its-button], a[its-button], its-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {

  @Input()
  color: string;

  @Input()
  outline: boolean;

  @HostBinding('class')
  get classes() {
    const classes = ['its-button'];

    if (SUPPORTED_COLORS.includes(this.color)) {
      classes.push(`its-button--color-${this.color}`);
    }

    if (this.outline === true) {
      classes.push(`its-button--outline`);
    }

    return classes;
  };

}
