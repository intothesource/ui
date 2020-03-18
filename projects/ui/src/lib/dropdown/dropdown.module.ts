import { NgModule } from '@angular/core';

import { DropdownComponent } from './dropdown.component';
import { DropdownItemComponent } from './dropdown-item.component';

@NgModule({
  declarations: [
    DropdownComponent,
    DropdownItemComponent,
  ],
  exports: [
    DropdownComponent,
    DropdownItemComponent,
  ]
})
export class DropdownModule { }
