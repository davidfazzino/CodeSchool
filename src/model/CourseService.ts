import { Course } from "./Course";
import { Observable } from "rxjs";

export abstract class CourseService {
    abstract getAllCourses() : Observable<Course[]>;

    abstract saveCourse(course:Course) : Observable<Course>;


}