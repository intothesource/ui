import { NgModule } from '@angular/core';

import { VisuallyHiddenDirective } from './visually-hidden.directive';
import { VisuallyHiddenComponent } from './visually-hidden.component';

@NgModule({
  declarations: [
    VisuallyHiddenDirective,
    VisuallyHiddenComponent,
  ],
  exports: [
    VisuallyHiddenDirective,
    VisuallyHiddenComponent,
  ]
})
export class VisuallyHiddenModule { }
