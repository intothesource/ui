import { Component, ViewEncapsulation, HostBinding } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
// import { timer } from 'rxjs';
import classNames from 'classnames';

import { Rxpple } from './rxpple';

@Component({
  selector: 'its-rxpple-container',
  templateUrl: './rxpple-container.component.html',
  styleUrls: [
    './rxpple-host.component.css',
    './rxpple-container.component.css'
  ],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('rxpple', [
      transition(':enter', [
        style({
          opacity: '0',
        }),
        animate('275ms ease-out', style({
          opacity: '0.5',
        })),
      ]),
      transition(':leave', [
        style({
          opacity: '0.5',
        }),
        animate('275ms ease-out', style({
          opacity: '0',
        })),
      ]),
    ]),
  ],
})
export class ITSRxppleContainerComponent {

  rxpples: Rxpple[] = [];

  @HostBinding('class')
  get classes() {
    return classNames('its-rxpple-container');
  }

  createRxpple(rxpple: Rxpple) {
    this.rxpples.push(rxpple);
    return rxpple;
  }

  destroyRxpple(rxpple: Rxpple) {
    this.rxpples.splice(this.rxpples.indexOf(rxpple), 1);
  }

}
