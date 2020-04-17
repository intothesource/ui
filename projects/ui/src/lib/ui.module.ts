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
import { CardModule } from './card/card.module';
import { ModalModule } from './modal/modal.module';
import { DatePickerModule } from './date-picker/date-picker.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { DragDropModule } from './drag-drop/drag-drop.module';

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
    CardModule,
    ModalModule,
    DatePickerModule,
    TooltipModule,
    DragDropModule,
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
    CardModule,
    ModalModule,
    DatePickerModule,
    TooltipModule,
    DragDropModule,
  ],
})
export class UiModule { }
