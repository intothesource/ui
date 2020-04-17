import { NgModule } from '@angular/core';

import { DragDropComponent } from './drag-drop.component';

@NgModule({
  declarations: [
    DragDropComponent,
  ],
  exports: [
    DragDropComponent,
  ]
})
export class DragDropModule { }
