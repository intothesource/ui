import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { ButtonComponent } from './button/button.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ToggleXComponent } from './toggle-x/toggle-x.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UiComponent,
    ButtonComponent,
    ToggleComponent,
    ToggleXComponent,
  ],
  imports: [
    FormsModule
  ],
  exports: [
    UiComponent,
    ButtonComponent,
    ToggleComponent,
    ToggleXComponent,
    FormsModule,
  ]
})
export class UiModule { }
