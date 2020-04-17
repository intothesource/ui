import { NgModule } from '@angular/core';

import { ButtonComponent } from './button.component';
import { RippleAnimationModule } from '../ripple-animation/ripple-animation.module';
import { RxppleModule } from '../rxpple/rxpple.module';

@NgModule({
  imports: [
    RippleAnimationModule,
    RxppleModule,
  ],
  declarations: [
    ButtonComponent,
  ],
  exports: [
    ButtonComponent,
  ]
})
export class ButtonModule { }
