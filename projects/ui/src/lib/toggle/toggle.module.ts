import { NgModule } from '@angular/core';

import { ToggleComponent } from './toggle.component';
import { VisuallyHiddenModule } from '../visually-hidden/visually-hidden.module';

@NgModule({
  declarations: [
    ToggleComponent,
  ],
  imports: [
    VisuallyHiddenModule,
  ],
  exports: [
    ToggleComponent,
  ]
})
export class ToggleModule { }
