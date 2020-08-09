import { Pipe, PipeTransform } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'fullLengthDateFormat'
})
export class FullLengthDateFormatPipe extends DatePipe implements PipeTransform {
  transform(value: NgbDateStruct, args?: any): any {
    if (value) {
      const date = new Date(value.year, value.month - 1, value.day);
      return super.transform(date, 'dd. MMMM yyyy');
    }
  }
}
