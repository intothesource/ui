import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from './button/button.module';
import { ToggleModule } from './toggle/toggle.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { RippleAnimationModule } from './ripple-animation/ripple-animation.module';
import { VisuallyHiddenModule } from './visually-hidden/visually-hidden.module';

@NgModule({
  imports: [
    FormsModule,
    ButtonModule,
    ToggleModule,
    DropdownModule,
    RippleAnimationModule,
    VisuallyHiddenModule,
  ],
  exports: [
    FormsModule,
    ButtonModule,
    ToggleModule,
    DropdownModule,
    RippleAnimationModule,
    VisuallyHiddenModule,
  ]
})
export class UiModule { }
