import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course-list/course-list.component';
import {RouterModule} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from '../model/CourseService';
import { CourseRestService } from '../model/CourseRestService';
import { CourseMemoryService } from '../model/CourseMemoryService';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      
      { path: 'welcome', component: HomeComponent},
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
