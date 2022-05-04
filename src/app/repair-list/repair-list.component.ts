import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { HttpDataService } from '../service/http-data.service';

@Component({
  selector: 'app-repair-list',
  templateUrl: './repair-list.component.html',
  styleUrls: ['./repair-list.component.scss']
})
export class RepairListComponent implements OnInit {

  users: any;
  repairs:any;
  loading:boolean = true;
  loggedUserid=0;
  pickeduser:any;
  loggedusersproperties:any;
  pickedproperty: any;
  pickedPropertyFlag= false;
  pickedpropertyrepairs: any;
  loggedUserFlag=false;
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
    
    this.service.getAllRepair().pipe(first()).subscribe(
      data => {
        this.repairs = data;
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

  getPickedPropertyRepairs(id:number){
    this.pickedPropertyFlag=true;
    this.service.getRepairByProperty(id).pipe(first()).subscribe(
      data => {
        this.pickedpropertyrepairs = data;
      },
      error => {},
      () => {this.loading = false;}
    );   
      
  }
}
