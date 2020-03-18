import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from './button/button.component';
import { ToggleComponent } from './toggle/toggle.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RippleAnimationComponent } from './ripple-animation/ripple-animation.component';
=======
import { DropdownModule } from './dropdown/dropdown.module';
>>>>>>> 9e50c4fc93fc490b22f70f0041a3d4b2fed0958a

@NgModule({
  declarations: [
    ButtonComponent,
    ToggleComponent,
<<<<<<< HEAD
    DropdownComponent,
    RippleAnimationComponent,
=======
>>>>>>> 9e50c4fc93fc490b22f70f0041a3d4b2fed0958a
  ],
  imports: [
    FormsModule,
    DropdownModule,
  ],
  exports: [
    FormsModule,
    DropdownModule,
    ButtonComponent,
    ToggleComponent,
  ]
})
export class UiModule { }
