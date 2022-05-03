import { Component, OnInit } from '@angular/core';
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
  pickedUserid=0;
  pickedUserFlag=false;
  pickeduser:any;
  pickedusersproperties:any;
  pickedUsername: any;
  constructor(private service:HttpDataService) {}

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
 
  getPickedUserProperies(id:number,name:string){
    this.pickedUserid=id;
    this.pickedUsername=name;
    this.pickedUserFlag=true;

    this.service.getPropertyByUser(id).pipe(first()).subscribe(
      data => {
        this.pickedusersproperties = data;
      },
      error => {},
      () => {this.loading = false;}
    );


  }
}
