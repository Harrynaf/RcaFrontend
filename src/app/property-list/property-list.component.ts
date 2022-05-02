import { Component, OnInit } from '@angular/core';
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
  pickedUserid=0;
  pickedUserFlag=false;
  pickeduser:any;
  pickedusersproperties:any;
  constructor(private service:HttpDataService) {}

  ngOnInit(): void {
    this.requestData();
  }

  requestData(){
    
    this.service.getAllProperty().subscribe(
      data => {
        this.properties = data;
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
}
