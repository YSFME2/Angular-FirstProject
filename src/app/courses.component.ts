import { Component } from "@angular/core";

@Component({
selector:'Courses',
template:`
<h1>{{title}}</h1>
<ul>
    <li *ngFor="let course of courses" >{{course}}</li>   
</ul>
`
})
export class CoursesComponent{
    title = "List of Courses";
    courses = ["course 1","course 2","course 3","course 4"];
}