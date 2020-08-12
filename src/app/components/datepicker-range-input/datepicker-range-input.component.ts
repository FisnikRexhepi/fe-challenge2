import { Component, ViewChild, ElementRef, Renderer2, OnInit, Output, EventEmitter } from '@angular/core';
import {
  NgbInputDatepicker,
  NgbDateStruct,
  NgbDateParserFormatter,
  NgbDate,
  NgbCalendar,
} from '@ng-bootstrap/ng-bootstrap';

// constants
const now = new Date();

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;


@Component({
  selector: 'app-datepicker-input',
  templateUrl: './datepicker-range-input.component.html',
  styleUrls: ['./datepicker-range-input.component.scss']
})
export class DatepickerRangeInputComponent implements OnInit {

  startDate: NgbDate;
  maxDate: NgbDateStruct;
  minDate: NgbDateStruct;
  hoveredDate: NgbDateStruct;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;
  fromAndToDateArray: any[] = [];

  @ViewChild('datepicker') input: NgbInputDatepicker;
  @ViewChild('myRangeInput') myRangeInput: ElementRef;

  @Output() newItemEvent = new EventEmitter<any>();



  constructor(
    private renderer: Renderer2,
    private parserFormatter: NgbDateParserFormatter) {
  }

  isHovered = date =>
    this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate)
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);

  ngOnInit(): void {
    // set maximum and minimum (years, month and dates) of calendar.
    this.maxDate = { year: now.getFullYear() + 10, month: now.getMonth() + 1, day: now.getDate() };
    this.minDate = { year: now.getFullYear() - 10, month: now.getMonth() + 1, day: now.getDate() };
  }

  //  set choosed date from user within input fields
  // and emit those values to parent component
  onDateSelection(date: NgbDateStruct): void {
    let parsed = '';
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
      this.toDate = date;
      this.closeDatePickerInput();
    }
    // user choosed to select same date instead of a range date.
     else if (this.fromDate === date) {
      this.toDate = date;
      this.closeDatePickerInput();
    }

     else {
      this.toDate = null;
      this.fromDate = date;
    }

    parsed += !this.toDate ? this.parserFormatter.format(this.fromDate) :
    `${this.parserFormatter.format(this.fromDate)} - ${this.parserFormatter.format(this.toDate)}`;
    this.renderer.setProperty(this.myRangeInput.nativeElement, 'value', parsed);
    this.newItemEvent.emit({ fromDate: this.fromDate, toDate: this.toDate });
  }
  closeDatePickerInput(): void {
    this.input.close();
  }
}


