import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutherService {

  constructor() { }

  getAuthers() { return ["Youssef","Shaaban","Ahmed","Mustafa"]; }
}
