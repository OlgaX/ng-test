import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex6',
  templateUrl: './ex6.component.html',
  styleUrls: ['./ex6.component.scss']
})
export class Ex6Component implements OnInit {
  date: string;

  constructor() { }

  ngOnInit(): void {
    this.date = this.getDateFromString('01.07.2021 15:00:00');
  }

  // !!! refactor getDateFromString method !!!
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
