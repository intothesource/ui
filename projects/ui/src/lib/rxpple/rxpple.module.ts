import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ITSRxppleDirective } from './rxpple.directive';
import { ITSRxppleContainerComponent } from './rxpple-container.component';
import { ITSRxppleComponent } from './rxpple.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    ITSRxppleDirective,
    ITSRxppleContainerComponent,
    ITSRxppleComponent,
  ],
  exports: [
    CommonModule,
    ITSRxppleDirective,
    ITSRxppleContainerComponent,
    ITSRxppleComponent,
  ]
})
export class RxppleModule { }
