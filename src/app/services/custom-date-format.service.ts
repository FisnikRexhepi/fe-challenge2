import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const fullMonths = ['January', 'February', 'Mars', 'April',
'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

@Injectable()
export class CustomDateParserFormatterService extends NgbDateParserFormatter {
    parse(value: string): NgbDateStruct {
        if (value) {
            const dateParts = value.trim().split('/');
            if (dateParts.length === 1 && dateParts[0]) {
                return {year: +dateParts[0], month: null, day: null};
            } else if (dateParts.length === 2 && dateParts[0] && dateParts[1]) {
                return {year: +dateParts[1], month: +dateParts[0], day: null};
            } else if (dateParts.length === 3 && dateParts[0] && dateParts[1] && dateParts[2]) {
                return {year: +dateParts[2], month: +dateParts[1], day: +dateParts[0]};
            }
        }
    }

    format(date: NgbDateStruct): string {
        let stringDate = '';
        if (date) {
            stringDate += date.day ? date.day + '. ' : '';
            stringDate += date.month ? fullMonths[date.month - 1].substring(0, 3) + ' ' : '';
            stringDate += date.year;
        }
        return stringDate;
    }
}
