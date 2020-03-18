import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from './button/button.module';
import { ToggleModule } from './toggle/toggle.module';
import { DropdownModule } from './dropdown/dropdown.module';

import { RippleAnimationComponent } from './ripple-animation/ripple-animation.component';

@NgModule({
  declarations: [
    RippleAnimationComponent,
  ],
  imports: [
    FormsModule,
    DropdownModule,
    ButtonModule,
    ToggleModule,
  ],
  exports: [
    FormsModule,
    DropdownModule,
    ButtonModule,
    ToggleModule,
  ]
})
export class UiModule { }
