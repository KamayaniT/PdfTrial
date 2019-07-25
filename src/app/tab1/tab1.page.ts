import { Component } from '@angular/core';
import * as moment from 'moment';
import {NanosqlService} from '../nanosql.service'
// import  * as pdfMake from 'pdfmake/build/pdfmake'
// import * as pdfFonts from 'pdfmake/build/vfs_fonts'
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
// declare var window;


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pdfObj: any;
  letterObj: any;
  students :any;
  curr_date:any;
  
  constructor(private nano:NanosqlService,private plt: Platform, private file: File, private fileOpener: FileOpener) {
    //pdfMake.vfs = pdfFonts.pdfMake.vfs;
    this.nano.createDB();
    this.getStudentsList();
    this.curr_date = moment().format("DD/MM/YYYY");
  //  console.log(window)
    // console.log(pdfMake)
    
  }
  

  getStudentsList(){
    this.students = [{
      name:"Anjali",
      present : "yes",
      checked: true
    },
    {
      name:"Bhavna",
      present : "yes",
      checked: true
    },
    {
      name:"Chetan",
      present : "yes",
      checked: true,
    },
    {
      name:"Dyson",
      present : "yes",
      checked: true,
    },
    {
      name:"Evelyn",
      present : "yes",
      checked: true,
    },
    {
      name:"Priyanka",
      present : "yes",
      checked: true,
    }
  ]
  }
  submitAttendance(){
   // console.log(this.students);
    this.nano.alterStudentAttendanceTable(this.curr_date,this.students)
    
  }
  getChangedCheckbox(studentname,event){
    
    var a = this.students.findIndex(obj => obj.name == studentname)
    this.students[a].checked = event.target.checked;
   // console.log(this.students)
  }
  
 exportPdf()
 {

 }


}



