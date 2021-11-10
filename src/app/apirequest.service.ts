import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class ApirequestService {


  constructor(private http: HttpClient) { }

  url = "https://api.hgbrasil.com/weather/?format=json-cors&key= f2eca5ae&woeid=455827";
  get(){
      return this.http.get<any>(this.url);
  }
}
