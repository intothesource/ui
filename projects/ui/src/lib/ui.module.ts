import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from './button/button.module';
import { ToggleModule } from './toggle/toggle.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { RippleAnimationModule } from './ripple-animation/ripple-animation.module';
import { VisuallyHiddenModule } from './visually-hidden/visually-hidden.module';
import { RippleModule } from './ripple/ripple.module';
import { ChipModule } from './chip/chip.module';
import { InputModule } from './input/input.module';
import { SnackbarModule } from './snackbar/snackbar.module';

@NgModule({
  imports: [
    FormsModule,
    ButtonModule,
    ToggleModule,
    DropdownModule,
    RippleAnimationModule,
    RippleModule,
    VisuallyHiddenModule,
    ChipModule,
    InputModule,
    SnackbarModule,
  ],
  exports: [
    FormsModule,
    ButtonModule,
    ToggleModule,
    DropdownModule,
    RippleAnimationModule,
    RippleModule,
    VisuallyHiddenModule,
    ChipModule,
    InputModule,
    SnackbarModule,
  ],
})
export class UiModule { }
