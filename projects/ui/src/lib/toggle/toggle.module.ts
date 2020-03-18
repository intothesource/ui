import { NgModule } from '@angular/core';

import { ToggleComponent } from './toggle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ToggleComponent,
  ],
  imports: [
    FormsModule,
  ],
  exports: [
    ToggleComponent,
  ]
})
export class ToggleModule { }
