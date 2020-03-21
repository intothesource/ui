import { Component, HostBinding, ViewEncapsulation, Inject } from '@angular/core';

import { DirectiveStylesService } from '../directive-styles.service';
import { VISUALLY_HIDDEN_STYLES } from './visually-hidden.styles';
import { VISUALLY_HIDDEN_STYLESHEET_NAME } from './visually-hidden.constants';

@Component({
  selector: 'its-visually-hidden',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
})
export class VisuallyHiddenComponent {

  @HostBinding('class.its-visually-hidden')
  itsVisuallyHidden = true

  constructor(
    @Inject(DirectiveStylesService) directiveStyles: DirectiveStylesService,
  ) {
    directiveStyles.addStyle(VISUALLY_HIDDEN_STYLES, VISUALLY_HIDDEN_STYLESHEET_NAME);
  }

}
