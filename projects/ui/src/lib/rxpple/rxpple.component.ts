import { Component, ViewEncapsulation, HostBinding, Input } from '@angular/core';
import classNames from 'classnames';

@Component({
  selector: 'its-rxpple',
  templateUrl: './rxpple.component.html',
  styleUrls: ['./rxpple.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ITSRxppleComponent {

  @Input()
  size: number;

  @HostBinding('style.width.px')
  get width() { return this.size; }

  @HostBinding('style.height.px')
  get height() { return this.size; }

  @HostBinding('class')
  get classes() {
    return classNames('its-rxpple');
  }

}
