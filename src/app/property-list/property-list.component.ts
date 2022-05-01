import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpDataService } from '../http-data.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  
  users: any;
  properties:any;
  loading:boolean = true;
  isShow = false;
  pickedUserid=0;
  picked=false;
  pickeduser:any;
  pickedusersproperties:any;
  constructor(private _Activatedroute:ActivatedRoute,private service:HttpDataService) { 
    this._Activatedroute.paramMap.subscribe(params => { 
      this.pickedUserid = parseInt(params.get('id')!); 

  })};

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
 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  getPickedUser(id:number){
    this.pickedUserid=id;
    this.picked=true;

    this.service.getUser(this.pickedUserid).subscribe(
      data => {
        this.pickeduser = data;
        this.pickedusersproperties= this.pickeduser.properties;
      },
      error => {},
      () => {this.loading = false;}
    );

  }
}
