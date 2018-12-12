import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course-list/course-list.component';
import {RouterModule} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from '../model/CourseService';
import { CourseRestService } from '../model/CourseRestService';
import { CourseMemoryService } from '../model/CourseMemoryService';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CreateCourseReactiveComponent } from './create-course/create-course-reactive/create-course-reactive.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseListComponent,
    CreateCourseComponent,
    CreateCourseReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      
      { path: 'welcome', component: HomeComponent},
      { path: 'course', component: CourseListComponent},
      { path: 'createCourse', component: CreateCourseComponent},
      { path: 'createCourseReactive', component: CreateCourseReactiveComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: 'courses', component: CourseListComponent} //,
  //    { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ] ),
  ],
  providers: [
    // { provide: CourseService, useClass: CourseRestService }
    { provide: CourseService, useClass: CourseMemoryService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
