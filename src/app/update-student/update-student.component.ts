import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';
import { ServiceService } from '../service.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Course1 } from '../course1';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {


  constructor(private service: ServiceService, private router: Router, private rout: ActivatedRoute) { }

  myform!: FormGroup

  id: any
  op: any
  ngOnInit(): void {

    this.id = this.rout.snapshot.params['id'];
    this.service.getStudentDetailById(this.id).subscribe((data: any) => {
      this.user = data;



    })

  }

  user: User = new User();
  course1: Course1 = new Course1();
  OnUpdate() {
    this.user.course1 = this.course1

    this.service.StudentCandidate(this.user).subscribe((data: any) => {
      console.log(data);

    })
    console.log(this.user);

    this.gotoDashBoard();

  }

  gotoDashBoard() {
    this.router.navigate(['/studentList'])
  }



}
