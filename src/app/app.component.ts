import { Component } from '@angular/core';
//import { ApiService } from './api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  router: any;
 
  constructor(private _router:Router){}
  toGo(){
    this._router.navigate(['employee']);
  }
  doIt(){
    this._router.navigate(['/department']);
  }
}

