import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { ButtonComponent } from './button/button.component';
import { ToggleComponent } from './toggle/toggle.component';



@NgModule({
  declarations: [UiComponent, ButtonComponent, ToggleComponent],
  imports: [
  ],
  exports: [UiComponent, ButtonComponent, ToggleComponent]
})
export class UiModule { }
