import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-output-datepicker-range',
  templateUrl: './output-datepicker-range.component.html',
  styleUrls: ['./output-datepicker-range.component.scss']
})
export class OutputDatepickerRangeComponent {

  @Input() arrayDatesRanges: any;

  constructor() { }
}
