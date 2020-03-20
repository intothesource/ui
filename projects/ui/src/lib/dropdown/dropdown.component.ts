import {
  Component,
  ViewEncapsulation,
  HostBinding, OnInit,
  ViewChildren, ViewChild, ElementRef,
  forwardRef,
  ContentChildren,
  QueryList, Input,
  AfterViewInit
} from '@angular/core';
import { DropdownItemComponent } from './dropdown-item.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'div[its-dropdown], its-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})

export class DropdownComponent implements AfterViewInit {
  @Input()
  get selected() {
    return this.$selected;
  }
  set selected(val) {
    this.$selected = val;
    this.setSelected();
    this.onChange(this.$selected);
    this.onTouch(this.$selected);
  }

  /**
   * Getter for elements created inside <ng-content> or the [options] attribute
   */
  get elements(): QueryList<DropdownItemComponent> {
    if (this.dropdownItems && this.dropdownItems.length)
      return this.dropdownItems;
    else return new QueryList();
  }

  @ContentChildren(DropdownItemComponent) dropdownItems!: QueryList<DropdownItemComponent>;

  $selected: any;

  @Input()
  options: any[] = [];
  onChange: any = () => { };
  onTouch: any = () => { };

  writeValue(value: any) {
    this.selected = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  ngAfterViewInit() {
    // If initial value is set on the <select> element itself,
    // then propagate this to the appropriate child
    if (this.hasSelected() === false && this.selected != null) {
      this.setSelected();
    }

    // If anything changes (due to *ngFor or external binding, for example),
    // then update the selected option.
    this.dropdownItems.changes.subscribe(change => {
      this.getSelected();
    });

    // Get the selected value upon init
    this.getSelected();

    // Get all of the listeners and setup handlers for clicks
    // Note: Could be done more elegantly.
    this.elements.map(el => {
      el.selectedted.subscribe(_ => {
        this.elements.map($el => {
          if ($el.value === el.value) {
            $el.selected = true;
            this.selected = $el.value;
          } else {
            $el.selected = undefined;
          }
        });
      });
    });
  }

  /**
   * Check if any of the children has a selected property
   */
  hasSelected() {
    const selected = this.elements.find(o => o.selected !== undefined);
    return !!selected;
  }

  /**
   * Propagate the selected value to the relevant child
   */
  setSelected() {
    const selected = this.elements.find(({ value }) => {
      return value === this.selected;
    });
    if (selected) selected.selected = true;
  }

  /**
   * Get the selected option and set it to the state of the <select> component
   */
  getSelected() {
    this.elements.map(option => {
      if (option.selected !== undefined) {
        this.selected = option.value;
      }
    });
  }

}
