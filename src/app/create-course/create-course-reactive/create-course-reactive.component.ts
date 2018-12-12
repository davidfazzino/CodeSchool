import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from '../../../model/Course';

@Component({
  selector: 'app-create-course-reactive',
  templateUrl: './create-course-reactive.component.html',
  styleUrls: ['./create-course-reactive.component.css']
})
export class CreateCourseReactiveComponent implements OnInit {
  courseForm:FormGroup;
  course:Course;
  constructor(private builder:FormBuilder) { }

  ngOnInit() {
    console.log("on init");
     this.courseForm= this.builder.group( {
          'title' : ['Angular for dummies', 
        [ Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
        'instructor' : ['Ciccio Pasticcio', 
        [ Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
        'duration' : ['10', 
        [ Validators.required, Validators.pattern('[0-9]+')]],
        'price' : ['0', 
        [ Validators.required, Validators.pattern('[0-9]+')]],


     });
  }

  save(courseForm: FormGroup) : void {
    console.log(courseForm.value);
    console.log(JSON.stringify(this.course));
  }

}
