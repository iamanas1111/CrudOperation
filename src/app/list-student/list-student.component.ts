import { Component, OnInit, PipeTransform } from '@angular/core';
import { ServiceService } from '../service.service';
import { Route, Router } from '@angular/router';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  Array = new Array();
  a: any
  formGroup!: FormGroup
  searchText: any
  checkboxes: any;
  formDelete!: FormGroup
  i: any;
  b: any;
  options: any;
  studentName: any;
  id: any;
  constructor(private service: ServiceService, private rout: Router, private fb: FormBuilder) { }
  dataSource: any
  filterValue: any
  ngOnInit(): void {

    this.getStudentDetail();
    this.initForm();

  }

  onclick(ob: MatCheckboxChange, id: Number) {
    if (ob.checked == true) {
      console.log(id);

      this.a = this.Array.push(id)
      console.log(this.Array);
    }
    else if (ob.checked == false) {
      for (let i = 0; i < this.Array.length; i++) {
        if (this.Array[i] == id) {
          this.Array.splice(i, 1)
        }
        console.log(this.Array);

      }


    }
    // sessionStorage.setItem("studedletent",JSON.stringify(this.Array));
    // console.log(this.Array);
    // console.log(this.a);



  }
  DeleteByChosing() {
    // let storedObject2 = JSON.parse(sessionStorage.getItem('delete') || '{}');
    // console.log(storedObject2);

    // for (var i = 0; i < storedObject2.length; i++) {
    //   this.b=storedObject2[i];
    //   console.log(storedObject2[i].id);

    //   this.formDelete= new FormGroup({
    //     id:new FormControl(storedObject2[i].id)
    //   })
    for (let index = 0; index < this.Array.length; index++) {
      const element = this.Array[index];
      console.log(element);


      this.service.deleteStudent(element).subscribe((data: any) => {
        this.getStudentDetail();
        console.log(data);

      })
    }
  }

  update(id: number) {
    this.rout.navigate(['/updateStudent', id])
  }

  delete(id: number) {
    this.service.deleteStudent(id).subscribe((data: any) => {
      console.log(data);
      this.getStudentDetail();
    }, error => console.log(error)
    )
  }

  initForm() {
    this.formGroup = this.fb.group({
      'id': [this.id]

    })

    this.formGroup.controls['id'].valueChanges.subscribe(response => {
      if (response) {
        console.log('data is ', response);
        this.filterData(response);
      } else {
        return this.getStudentDetail();

      }
    })

  }

  filterData(enteredData: any) {
    // enteredData = enteredData.toLocaleLowerCase();
    this.dataSource = this.options.filter((item: any) => {
      return item.id.toString().indexOf(enteredData) > -1

    })

  }

  getStudentDetail() {

    this.service.getStudentDetail().subscribe((data: any) => {
      this.dataSource = data
      this.options = data;
      console.log(data);

    })
  }



}
