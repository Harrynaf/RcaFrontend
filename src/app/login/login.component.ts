import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { HttpDataService } from '../service/http-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  response: any;
  loading:boolean = true;
  isShow = true;


  constructor(private service:HttpDataService) { }

  ngOnInit(): void {
    this.requestData();
  }

  requestData(){
    
    this.service.getAllUser().pipe(first()).subscribe(
      data => {
        this.response = data;
      },
      error => {},
      () => {this.loading = false;}
    );
  }

  toggleDisplay() {
    this.isShow = false;
  }
}
