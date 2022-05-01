import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpDataService } from '../http-data.service';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.scss']
})
export class PropertyFormComponent implements OnInit {

  property: any;
  loading:boolean = true;
  id:any;
constructor(private _Activatedroute:ActivatedRoute,private service:HttpDataService) { 
this._Activatedroute.paramMap.subscribe(params => { 
this.id = parseInt(params.get('id')!); 
this.requestData();
})};

  ngOnInit(): void {
  }
  requestData(){
    this.service.getProperty(this.id).subscribe(
      data => {
        this.property = data;
      },
      error => {},
      () => {this.loading = false;}
    );
  }
}
