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
  _listFilter:string;
  courses: Course[];
  filteredCourses: Course[];
  

  constructor(private service: CourseService) {
  }

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCourses = this._listFilter ? 
        this.performFilter(this._listFilter) : this.courses;
  }


  performFilter(filterBy: string): Course[] {
    filterBy = filterBy.toLocaleLowerCase();

    return this.courses.filter( c => c.title.toLocaleLowerCase()
    .indexOf(filterBy) != -1 );
  }


  ngOnInit() {
    this.service.getAllCourses().subscribe (
      cs => { this.courses = cs; this.filteredCourses = cs;},
      error => {console.log(" errore " + error);}
    );
  
  }

}
