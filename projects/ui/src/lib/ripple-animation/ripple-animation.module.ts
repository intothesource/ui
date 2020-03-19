import { NgModule } from '@angular/core';

import { RippleAnimationComponent } from './ripple-animation.component';

@NgModule({
  declarations: [
    RippleAnimationComponent
  ],
  exports: [
   RippleAnimationComponent
  ]
})
export class RippleAnimationModule { }
