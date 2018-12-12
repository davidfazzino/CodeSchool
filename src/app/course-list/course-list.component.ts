import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { CourseMemoryService } from '../../model/CourseMemoryService';
import { CourseRestService } from '../../model/CourseRestService';
import { HttpClient } from '@angular/common/http';
import { CourseService } from '../../model/CourseService';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  pageTitle: string = "Available Courses"

  courses: Course[];
  filteredCourses: Course[];
  

  constructor(private service: CourseService) {

  }


  // constructor(httpClient:HttpClient) {   
  //     this.service = new CourseRestService(httpClient);

  //     // this.filteredCourses = [
  //     //   new Course(1,"pipo", 100,100),
  //     //   new Course(1,"pipo", 100,100)
  //     // ];
  // }

//   constructor() { 
//     this.service = new CourseMemoryService();
// }

  ngOnInit() {
  //  this.courses = this.service.getAllCourses();
    this.service.getAllCourses().subscribe (
      cs => { this.courses = cs; this.filteredCourses = cs;},
      error => {console.log(" errore " + error);}
    );
  
  }

}
