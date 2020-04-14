import { NgModule } from '@angular/core';

import { ButtonComponent } from './button.component';
import { RippleAnimationModule } from '../ripple-animation/ripple-animation.module';

@NgModule({
  imports: [
    RippleAnimationModule
  ],
  declarations: [
    ButtonComponent,
  ],
  exports: [
    ButtonComponent,
  ]
})
export class ButtonModule { }
