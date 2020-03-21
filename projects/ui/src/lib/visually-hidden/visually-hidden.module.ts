import { NgModule } from '@angular/core';

import { VisuallyHiddenDirective } from './visually-hidden.directive';
import './visually-hidden.directive.css'

@NgModule({
  declarations: [
    VisuallyHiddenDirective,
  ],
  exports: [
    VisuallyHiddenDirective,
  ]
})
export class VisuallyHiddenModule { }
