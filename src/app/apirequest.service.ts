import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class ApirequestService {


  constructor(private http: HttpClient) { }

  url = "https://api.hgbrasil.com/weather/?format=json-cors&key=development&woeid=455827";
  get(){
      return this.http.get(this.url).toPromise().then(data => {console.log("data", data)});
  }
}
