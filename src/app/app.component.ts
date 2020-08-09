import { Component, Input } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  arrayDateRanges: Array<NgbDateStruct[]> = [];
  title = 'fe_challenge2';



  addFirstDateRange(dates: any): void {
    const tempArray = new Array(dates.fromDate, dates.toDate);
    this.arrayDateRanges[0] = tempArray;
  }


  addSecondDateRange(dates: any): void {
    const tempArray = new Array(dates.fromDate, dates.toDate);
    this.arrayDateRanges[1] = tempArray;
  }
}
