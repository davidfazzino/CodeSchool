import { CourseService } from "./CourseService";
import { Course } from "./Course";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable()
export class CourseRestService extends CourseService {

    private courseUrl = 'api/courses/courses.json';
    constructor(private http: HttpClient)
    {
        super();
    }

    getAllCourses(): Observable<Course[]> {
       
        return this.http.get<Course[]>(this.courseUrl)
      .pipe(
          tap(d => console.log(JSON.stringify(d)))
      );
    }




    private handleError(err: HttpErrorResponse): any {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code ${err.status}, and code ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }

}