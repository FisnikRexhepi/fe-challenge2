import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatepickerRangeInputComponent } from '../components/datepicker-range-input/datepicker-range-input.component';
import { OutputDatepickerRangeComponent } from '../components/output-datepicker-range/output-datepicker-range.component';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CustomDateParserFormatterService } from '../services/custom-date-format.service';
import { FullLengthDateFormatPipe } from '../pipes/full-length-date-format.pipe';

@NgModule({
  declarations: [
    DatepickerRangeInputComponent,
    OutputDatepickerRangeComponent,
    FullLengthDateFormatPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,

  ],
  exports: [
    FormsModule,
    DatepickerRangeInputComponent,
    OutputDatepickerRangeComponent,
  ],
  providers: [
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatterService,
    },
  ],
})
export class SharedModule {}
