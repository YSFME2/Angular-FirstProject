import { AutherService } from './../auther.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auther',
  templateUrl: './auther.component.html',
  styleUrls: ['./auther.component.css']
})
export class AutherComponent implements OnInit {
  authers;
  constructor(service: AutherService) {
    this.authers = service.getAuthers();
  }

  ngOnInit(): void {
  }

}
