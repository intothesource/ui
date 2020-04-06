import { NgModule } from '@angular/core';

import { RippleAnimationComponent } from './ripple-animation.component';
import { RippleComponent } from '../ripple/ripple.component';

@NgModule({
  declarations: [
    RippleAnimationComponent,
    RippleComponent,
  ],
  exports: [
   RippleAnimationComponent
  ]
})
export class RippleAnimationModule { }
