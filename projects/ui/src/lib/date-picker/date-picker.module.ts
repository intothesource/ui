import { NgModule } from '@angular/core';

import { DatePickerComponent } from './date-picker.component';

@NgModule({
  declarations: [
    DatePickerComponent,
  ],
  exports: [
    DatePickerComponent,
  ]
})
export class DatePickerModule { }
