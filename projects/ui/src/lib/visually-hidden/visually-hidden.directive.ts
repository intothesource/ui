import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[itsVisuallyHidden]',
})
export class VisuallyHiddenDirective {

  @HostBinding('class.its-visually-hidden')
  itsVisuallyHidden = true

}
