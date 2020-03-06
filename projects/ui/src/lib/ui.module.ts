import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { ToggleComponent } from './toggle/toggle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonComponent,
    ToggleComponent,
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
