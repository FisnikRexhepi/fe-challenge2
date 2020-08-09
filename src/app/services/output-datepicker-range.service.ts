import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomFormatDateModel } from '../models/custom-format-date.model';


@Injectable()
export class OutputDatepickerRangeService {

  constructor() { }

  observer = new Subject();
  subcriber$ = this.observer.asObservable();

  emitSelectedDate(date: any) {
    this.observer.next(date);
  }

}
