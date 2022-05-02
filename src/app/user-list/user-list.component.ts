import { Component, OnInit } from '@angular/core';
import { HttpDataService } from '../service/http-data.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  response: any;
  loading:boolean = true;
  isShow = true;


  constructor(private service:HttpDataService) { }

  ngOnInit(): void {
    this.requestData();
  }

  requestData(){
    
    this.service.getAllUser().subscribe(
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
