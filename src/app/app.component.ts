import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  cities:any;
  constructor(private _api:ApiService){
    this._api.getData().subscribe((data) => {
    this.cities=data;
    })
  }
}
