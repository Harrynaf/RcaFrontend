import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { HttpDataService } from '../service/http-data.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  
  users: any;
  properties:any;
  loading:boolean = true;
  loggedUserid=0;
  loggedUserFlag=false;
  loggedusersproperties:any;
  constructor(private _Activatedroute:ActivatedRoute,private service:HttpDataService) { 
    let URL = window.location.href;
    let URL_AS_LIST = (URL).split('/');
    this.loggedUserid = parseInt(URL_AS_LIST[4]);
    if (!isNaN(this.loggedUserid))
    this.getLoggedUserProperies();
    };

  ngOnInit(): void {
    this.requestData();
  }

  requestData(){
    
    this.service.getAllProperty().pipe(first()).subscribe(
      data => {
        this.properties = data;
      },
      error => {},
      () => {this.loading = false;}
    );
    this.service.getAllUser().pipe(first()).subscribe(
      data => {
        this.users = data;
      },
      error => {},
      () => {this.loading = false;}
    );
  }
 
  getLoggedUserProperies(){
    this.loggedUserFlag=true;

    this.service.getPropertyByUser(this.loggedUserid).pipe(first()).subscribe(
      data => {
        this.loggedusersproperties = data;
      },
      error => {},
      () => {this.loading = false;}
    );


  }
}
