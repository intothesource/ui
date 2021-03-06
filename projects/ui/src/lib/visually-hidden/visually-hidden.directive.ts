import { Directive, HostBinding, Inject } from '@angular/core';

import { DirectiveStylesService } from '../directive-styles.service';
import { VISUALLY_HIDDEN_STYLES } from './visually-hidden.styles';
import { VISUALLY_HIDDEN_STYLESHEET_NAME } from './visually-hidden.constants';

@Directive({
  selector: '[itsVisuallyHidden]',
})
export class VisuallyHiddenDirective {

  @HostBinding('class.its-visually-hidden')
  itsVisuallyHidden = true

  constructor(
    @Inject(DirectiveStylesService) directiveStyles: DirectiveStylesService,
  ) {
    directiveStyles.addStyle(VISUALLY_HIDDEN_STYLES, VISUALLY_HIDDEN_STYLESHEET_NAME);
  }

}
