import { Component, OnInit } from '@angular/core';
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
  pickedPropertyid=0;
  pickedPropertyFlag= false;
  constructor(private service:HttpDataService) {}

  ngOnInit(): void {
    this.requestData();
  }

  requestData(){
    
    this.service.getAllRepair().subscribe(
      data => {
        this.repairs = data;
      },
      error => {},
      () => {this.loading = false;}
    );
    this.service.getAllUser().subscribe(
      data => {
        this.users = data;
      },
      error => {},
      () => {this.loading = false;}
    );
  }
 
  getPickedUser(id:number){
    this.pickedUserid=id;
    this.pickedUserFlag=true;

    this.service.getUser(this.pickedUserid).subscribe(
      data => {
        this.pickeduser = data;

        this.pickedusersproperties = this.pickeduser.properties.filter((value: any, index: any) => {
          const _value = JSON.stringify(value);
          return index === this.pickeduser.properties.findIndex((obj: any) => {
            return JSON.stringify(obj) === _value;
          });
        });
      },
      error => {},
      () => {this.loading = false;}
    );
  }

  getPickedProperty(id:number){
    this.pickedPropertyid=id;
    this.pickedPropertyFlag=true;

    this.service.getProperty(this.pickedPropertyid).subscribe(
      data => {
        this.pickedproperty = data;
      },
      error => {},
      () => {this.loading = false;}
    );   
      
  }
}
