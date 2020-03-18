import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { ToggleComponent } from './toggle/toggle.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ToggleComponent,
    DropdownComponent,
  ],
  imports: [
    FormsModule
  ],
  exports: [
    FormsModule,
    ButtonComponent,
    ToggleComponent,
  ]
})
export class UiModule { }
