import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from './button/button.component';
import { ToggleComponent } from './toggle/toggle.component';
import { DropdownModule } from './dropdown/dropdown.module';

@NgModule({
  declarations: [
    ButtonComponent,
    ToggleComponent,
  ],
  imports: [
    FormsModule,
    DropdownModule,
  ],
  exports: [
    FormsModule,
    DropdownModule,
    ButtonComponent,
    ToggleComponent,
  ]
})
export class UiModule { }
