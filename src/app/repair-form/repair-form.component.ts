import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpDataService } from '../service/http-data.service';

@Component({
  selector: 'app-repair-form',
  templateUrl: './repair-form.component.html',
  styleUrls: ['./repair-form.component.scss']
})
export class RepairFormComponent implements OnInit {

  repair: any;
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
    this.service.getRepair(this.id).subscribe(
      data => {
        this.repair = data;
      },
      error => {},
      () => {this.loading = false;}
    );
  }

}
