import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpDataService } from '../http-data.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

        user: any;
        loading:boolean = true;
        id:any;
  constructor(private _Activatedroute:ActivatedRoute,private service:HttpDataService) { 
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = parseInt(params.get('id')!); 
      this.requestData();
  });
   
  }

  requestData(){
    this.service.getUser(this.id).subscribe(
      data => {
        this.user = data;
      },
      error => {},
      () => {this.loading = false;}
    );
  }
  ngOnInit(): void {
    
  }

}
