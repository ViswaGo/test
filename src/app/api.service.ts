import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient  ) { }

  getData(){
    let _url="http://universities.hipolabs.com/search?country=United+States";
    return this._http.get(_url);
  }
}
