import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { NgForm } from '@angular/forms';
import { CourseService } from '../../model/CourseService';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  newCourse: Course;
  constructor(private service: CourseService) {
  }

  ngOnInit() {
    this.newCourse = new Course(null, null, null,null,  null);
  }

  save(createForm: NgForm) : void {
    this.service.saveCourse(this.newCourse).subscribe(
      c => {
        console.log("course saved ");
        console.log(JSON.stringify(c));
      } 
      
    );
  }

}
