import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';
import { Course1 } from '../course1';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
 

  constructor(private service: ServiceService, private router: Router) { }

  a: any;
  myform !: FormGroup
  studentName:any
  email:any
  address:any
  course:any
  college:any
  studentId:any

  studentName2:any
  email2:any
  address2:any
  course2:any
  college2:any
  studentId2:any
  storedObject:any
  form!:FormGroup

  Array = new Array();
  Array2: any = [];
  Array3: any = [];
  Array4: any = [];
  storedObject2:any
  ngOnInit(): void{
    // const storedObject2 = JSON.parse(sessionStorage.getItem('studentArray') || '{}');
    // this.studentName=storedObject2.studentName;
    // this.email=storedObject2.email;
    // this.address=storedObject2.address;
    // this.studentId=storedObject2.studentId;
    // this.course=storedObject2.course;
    // this.college=storedObject2.college;
    
    // console.log(storedObject2);
    // var i;
    // for (i = 0; i < storedObject2.length; i++) {
    //   this.studentName=storedObject2.studentName;
    //   this.email=storedObject2.email;
    //   this.address=storedObject2.address;
    //   this.studentId=storedObject2.studentId;
    //    this.course=storedObject2.course;
    //   this.college=storedObject2.college;
              
    // }
    
    this.myform = new FormGroup({
      studentName: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      course: new FormControl(''),
      college: new FormControl(''),

    })
  }
  user: User = new User();
  course1: Course1 = new Course1();
  Onsubmit() {
    const storedObject2 = JSON.parse(sessionStorage.getItem('studentArray') || '{}');
    console.log(storedObject2);
    
    for (var i = 0; i < storedObject2.length; i++) {
      
      this.form = new FormGroup({
        studentName: new FormControl(storedObject2[i].studentName),
        email: new FormControl(storedObject2[i].email),
        address: new FormControl(storedObject2[i].address),
        studentId: new FormControl(storedObject2[i].studentId),
        course1: new FormControl(storedObject2[i]),
        course: new FormControl(storedObject2[i].course1.course),
        college: new FormControl(storedObject2[i].course1.college),
      })
      console.log(storedObject2.studentName);
      

      //WITHOUT SESSION STORAGE

      // for (let index = 0; index < this.Array.length; index++) {
      //   const element = this.Array[index];
      //   console.log(element);
  
      this.service.StudentCandidate(this.form.value).subscribe((data: any) => {
        console.log(data);
  
        this.gotoDashBoard();
      })         
    }
  }

  gotoDashBoard() {
    this.router.navigate(['/studentList'])
  }


  Onsave(){
    
    //USING IN BOTH WITH SESSION STORAGE AND WITHOUT SESSION STORAGE
    this.myform.value.course1=this.course1
    this.Array.push(this.myform.value);
    sessionStorage.setItem("studentArray",JSON.stringify(this.Array));

    //USING ONLY FOR WITHOUT SESSION STORAGE
    // this.user.course1=this.course1
    // this.Array.push(this.user);
    // console.log(this.Array);
    this.myform.reset();
  }
}


