import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  newCourse: Course;
  constructor() {

   }

  ngOnInit() {
    this.newCourse = new Course(null, null, null,null,  null);
  }

  save(createForm: NgForm) : void {
    console.log(createForm.value);
    console.log("************************************");
    console.log(JSON.stringify(this.newCourse));
  }

}
