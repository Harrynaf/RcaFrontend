import { Component, OnInit } from '@angular/core';
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


  constructor(private service:HttpDataService) { }

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
  }
 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }
}
