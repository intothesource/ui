import { Component, ViewEncapsulation, HostBinding } from '@angular/core';
import { trigger, style, animate, transition, keyframes, state } from '@angular/animations';
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
      state('*', style({
        borderRadius: '50%',
        opacity: 0.5,
        transform: 'scale(1)',
        left: '{{x}}px',
        top: '{{y}}px',
      }), { params: { x: 0, y: 0 } }),
      transition('void => *', [
        style({
          transform: 'scale(0)',
          left: '{{x}}px',
          top: '{{y}}px',
        }),
        animate('350ms ease-in-out',
          style({
            opacity: 0.5,
            transform: 'scale(1)'
          }),
        ),
      ]),
      transition('* => void', [
        animate('200ms ease-in',
          style({ opacity: 0.0 }),
        ),
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
