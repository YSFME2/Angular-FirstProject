import { AutherService } from './auther.service';
import { carService } from './car/car.service';
import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { AutherComponent } from './auther/auther.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CarComponent,
    AutherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [carService,AutherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
