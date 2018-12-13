import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Course } from '../../../model/Course';
import { CourseService } from '../../../model/CourseService';

function courseEconomyValidator(ac:AbstractControl) : {[key:string]:boolean} | null {
  //console.log("validator custom");
  let duration = ac.get('duration');
  let price = ac.get('price');
  if(duration.value > 10 && price.value < 1000) {
    console.log("group invalid");
    return {'economy': true}
  }
  return null;
}


function ValidatePriceLimits(durationLimit: number, minPrice: number): ValidatorFn {
  return (ac: AbstractControl): { [key: string]: {} } | null => {
    let duration = ac.get('duration').value;
    let price = ac.get('price').value;
    if(duration >= durationLimit && price < minPrice) {
      return {'economy': {limit: durationLimit, minPrice : minPrice}} 
    }
     
   return null;
  };
}

@Component({
  selector: 'app-create-course-reactive',
  templateUrl: './create-course-reactive.component.html',
  styleUrls: ['./create-course-reactive.component.css']
})
export class CreateCourseReactiveComponent implements OnInit {
  courseForm:FormGroup;
  course:Course;
  constructor(private builder:FormBuilder, private service: CourseService) { }

  ngOnInit() {
    this.course = new Course();
     this.courseForm= this.builder.group( {
          'title' : ['Angular for dummies', 
        [ Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        'instructor' : ['Ciccio Pasticcio', 
        [ Validators.required, Validators.minLength(2), Validators.maxLength(20)]],


        commercialGroup: this.builder.group( {
          'duration' : ['10', 
          [ Validators.required, Validators.pattern('[0-9]+')]],
          'price' : ['0', 
          [ Validators.required, Validators.pattern('(0|[1-9][0-9]*)([,.][0-9]{1,2})?')]]
        },
        {
           //validator: courseEconomyValidator
           validator: ValidatePriceLimits(50, 2000)
        }

        ),

     });
  }

  save(courseForm: FormGroup) : void {
    console.log(this.courseForm.value);
    this.service.saveCourse(this.course).subscribe(
      c => {
        console.log("course saved ");
        console.log(JSON.stringify(c));
      } 
      
    );
  }

  showStatus() : void {
    console.log("status " +  this.courseForm.get('commercialGroup').errors.economy);
   
  }

}
