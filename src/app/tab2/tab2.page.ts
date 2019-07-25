import { Component} from '@angular/core';
import {NanosqlService} from '../nanosql.service'
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 attList;
 date;
  constructor(private nano:NanosqlService) {
    this.getAttendance()
  }

  getAttendance(){
this.attList = this.nano.getAttendanceList();
debugger;
this.date = Object.keys(this.attList[0])
this.date = this.date[1];
console.log(this.attList)
  }
}

