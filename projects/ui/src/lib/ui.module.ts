import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from './button/button.module';
import { ToggleModule } from './toggle/toggle.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { RippleAnimationModule } from './ripple-animation/ripple-animation.module';

@NgModule({
  declarations: [
    ButtonModule,
    ToggleModule,
    DropdownModule,
    RippleAnimationModule
  ],
  imports: [
    FormsModule,
    ButtonModule,
    ToggleModule,
    DropdownModule,
    RippleAnimationModule
  ],
  exports: [
    FormsModule,
    ButtonModule,
    ToggleModule,
    DropdownModule,
    RippleAnimationModule
  ]
})
export class UiModule { }
