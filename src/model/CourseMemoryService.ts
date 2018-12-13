import { Course } from "./Course";
import { CourseService } from "./CourseService";
import {Observable} from "rxjs"
import { of } from 'rxjs'; 

export class CourseMemoryService extends CourseService {
   
    getAllCourses() : Observable<Course[]> {
        return of(this.courses);
    }

    saveCourse(course:Course): Observable<Course> {
        throw new Error("Method not implemented.");
    }

    private courses: Course[] = [
        new Course(1,"Angular Rules", "gino",100, 1000),
        new Course(2,"Viva TypeScript","gigi", 10, 500),
        new Course(3,"Kotlin is the new Java","beppe", 1, 5000)

    ]; 
}