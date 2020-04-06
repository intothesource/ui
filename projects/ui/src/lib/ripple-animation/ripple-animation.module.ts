import { NgModule } from '@angular/core';

import { RippleAnimationComponent } from './ripple-animation.component';
import { RippleModule } from '../ripple/ripple.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RippleModule,
    CommonModule
  ],
  declarations: [
    RippleAnimationComponent,
  ],
  exports: [
   RippleAnimationComponent,
  ]
})

export class RippleAnimationModule { }
