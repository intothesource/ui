import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button[its-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent
  implements OnInit {

  @HostBinding('class')
  classes = 'its-button';

  constructor() { }

  ngOnInit() { }

}
