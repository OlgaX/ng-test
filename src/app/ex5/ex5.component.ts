import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex5',
  templateUrl: './ex5.component.html',
  styleUrls: ['./ex5.component.scss']
})
export class Ex5Component implements OnInit {
  dates = [
    '16.12.2020 12:34:58',
    '03.07.2020 23:16:28',
    '22.09.2020 11:45:17',
  ];

  constructor() { }

  ngOnInit(): void {
    this.sort(this.dates);
  }

  // !!! fix sort method !!!
  sort(arr: any[]): void {
    arr.sort((a, b) => a - b);
  }

  getDateFromString(date: any): any {
    if (!date) {
      return null;
    }
    const t: string[] = date.toString().split(/[. :]/);

    let DD = +t[0];
    let MM = +t[1] - 1;
    let YYYY = +t[2];

    let HH = +t[3];
    let mm = +t[4];
    let ss = +t[5];

    DD = DD ? DD : 0;
    MM = MM ? MM : 0;
    YYYY = YYYY ? YYYY : 0;

    HH = HH ? HH : 0;
    mm = mm ? mm : 0;
    ss = ss ? ss : 0;

    return new Date(YYYY, MM, DD, HH, mm, ss);
  }

}
