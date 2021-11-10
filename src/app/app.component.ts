import { Component } from '@angular/core';
import { ApirequestService } from './apirequest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private apiService : ApirequestService){}

  ngOnInit(){

    this.getRequest();
  }



  getRequest(){
    this.apiService.get();

  }


  title = 'climarj';
}
