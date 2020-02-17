import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { ButtonComponent } from './button/button.component';
import { ToggleComponent } from './toggle/toggle.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UiComponent, ButtonComponent, ToggleComponent],
  imports: [
    FormsModule
  ],
  exports: [UiComponent, ButtonComponent, ToggleComponent, FormsModule]
})
export class UiModule { }
