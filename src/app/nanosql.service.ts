import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
@Injectable({
  providedIn: 'root'
})
export class NanosqlService {

  columnName: any;
  students: any;
  db :any;
  constructor(private sqlite: SQLite) {

   }

   createDB(){
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

  this.sqlite.create({
    name: "studentsdb",
    location: "default"
  }).then((db: SQLiteObject) => {
    db.executeSql('create table IF NOT EXISTS student_master (name varchar(50))', {} as any)
      .then(() => {
        this.db = db;
        alert("Executed properly") 
      })
      .catch((err) => {
         alert("error new"+JSON.stringify(err))
      })
      for(var i=0;i<this.students.length;i++){
    db.executeSql("insert into  student_master (name) VALUES(?)", [this.students[i].name])
      .then(() => {
        //  alert("Inserted properly");
      })
      .catch((err) => {
        alert("error new"+err);
      })
    }

  })
  
 
  }
  alterStudentAttendanceTable(columnName,studentsList)
  {
    
    this.columnName = columnName.toString();
    console.log("Alter table student_master add column '"+columnName+"' varchar(25)")
    this.sqlite.create({
      name: 'studentsdb',
      location: 'default'
    }).then((db: SQLiteObject) => {

  db.executeSql("ALTER TABLE student_master ADD COLUMN ["+columnName+"] varchar(25)",{} as any)
        .then(() => {
            alert("altered properly");
            for(var i=0;i<this.students.length;i++){
              let presentee = '1'
              if(studentsList[i].checked == false)
              {
                presentee = '0';
              }

              console.log("UPDATE student_master set  Day"+columnName+" = '"+presentee+"' where name = '"+studentsList[i].name+"'")
              db.executeSql(" UPDATE student_master set  ["+columnName+"] = '"+presentee+"' where name = '"+studentsList[i].name+"'",{} as any)
                .then(() => {
                  alert("update");
                  //  alert("Inserted properly");
                })
                .catch((err) => {
                  alert("error"+JSON.stringify(err));
                })
              }

   
        })
        .catch((err) => {
          alert("error"+JSON.stringify(err));
        })

    

    })
      .catch(e => console.log(e));

  }

 getAttendanceList(){
  var arr = [];
  this.sqlite.create({
    name: 'studentsdb',
    location: 'default'
  }).then((db: SQLiteObject) => {
  db.executeSql("select * from student_master",{} as any)
  .then((data) =>{ console.log("Executed properly");
 //var col = this.columnName;

  if(data.rows.length > 0)
  {
    
  for(var i=0;i<data.rows.length;i++)
   {
   
    arr.push(data.rows.item(i));

   }
   console.log(arr);
  }

})
.catch((err) =>{
alert("error"+"error in select");
})

 
}).catch(err=> console.log(err))
return arr;
 }
}
