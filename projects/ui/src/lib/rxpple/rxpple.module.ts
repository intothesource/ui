import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ITSRippleDirective } from './rxpple.directive';
import { ITSRxppleContainerComponent } from './rxpple-container.component';
import { ITSRxppleComponent } from './rxpple.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    ITSRippleDirective,
    ITSRxppleContainerComponent,
    ITSRxppleComponent,
  ],
  exports: [
    CommonModule,
    ITSRippleDirective,
    ITSRxppleContainerComponent,
    ITSRxppleComponent,
  ]
})
export class RxppleModule { }
