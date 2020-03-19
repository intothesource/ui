import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  HostListener,
  ViewEncapsulation
} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'its-dropdown-item',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
    `
      .its-select-option {
        display: block;
        padding: 0.125em 0.5em;
        cursor: pointer;
      }
    `,
    `
      .its-select-option--selected {
        background: silver;
      }
    `
  ]
})
export class DropdownItemComponent {
  @Input()
  value: any;

  @Input()
  selected: any;

  @Output()
  selectedted = new EventEmitter<boolean>();

  @HostBinding('class')
  get classes() {
    const classes = ['its-select-option'];

    if (this.selected !== undefined) {
      console.log('What is selected: ', this.selected);
      classes.push('its-select-option--selected');
    }

    return classes.join(' ');
  }

  @HostListener('click')
  onClick() {
    this.selectedted.emit(true);
  }
}
