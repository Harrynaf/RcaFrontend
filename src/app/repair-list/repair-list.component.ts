import { Component, OnInit } from '@angular/core';
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
  pickedUserid=0;
  pickedUserFlag=false;
  pickeduser:any;
  pickedusersproperties:any;
  pickedusersrepairs:any;
  pickedproperty: any;
  pickedPropertyFlag= false;
  pickedpropertyrepairs: any;
  constructor(private service:HttpDataService) {}

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
 
  getPickedUserProperies(id:number){
    this.pickedUserid=id;
    this.pickedUserFlag=true;

    this.service.getPropertyByUser(id).pipe(first()).subscribe(
      data => {
        this.pickedusersproperties = data;
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
