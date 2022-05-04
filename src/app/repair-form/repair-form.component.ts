import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
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
  responseRepair: any;
  alteredRepair= {
    "id": 0,
    "date": "",
    "description": "",
    "type": "",
    "status": "",
    "cost": 0,
    "toDoDesc": "0",
    "property": {
        "id": 0,
        "owner": {
            "id": 0,
        }
    }
}
  message: any;
  newReapair= {
    "date": "",
    "description": "",
    "type": "",
    "status": "",
    "cost": 0,
    "toDoDesc": "0",
    "property": {
        "id": 0,
        "owner": {
            "id": 0,
        }
    }
};
constructor(private _Activatedroute:ActivatedRoute,private service:HttpDataService) { 
this._Activatedroute.paramMap.subscribe(params => { 
this.id = parseInt(params.get('id')!); 
this.requestData();
})};

  ngOnInit(): void {
  }
  requestData(){
    this.service.getRepair(this.id).pipe(first()).subscribe(
      data => {
        this.repair = data;
      },
      error => {},
      () => {this.loading = false;}
    );
  }
  onSubmit(f: NgForm) {
    if(f.value.date == '')
    f.value.date=this.repair.date;
    if(f.value.description == '')
    f.value.description=this.repair.description;
    if(f.value.type == '')
    f.value.type=this.repair.type;
    if(f.value.status == '')
    f.value.status=this.repair.status;
    if(f.value.cost == '')
    f.value.cost=this.repair.cost;
    if(f.value.toDoDesc == '')
    f.value.toDoDesc=this.repair.toDoDesc;

    //
    this.alteredRepair.id=this.repair.id;
    this.alteredRepair.property.id=this.repair.property.id;
    this.alteredRepair.date=f.value.date;
    this.alteredRepair.description=f.value.description;
    this.alteredRepair.type=f.value.type;
    this.alteredRepair.status=f.value.status;
    this.alteredRepair.cost=f.value.cost;
    this.alteredRepair.toDoDesc=f.value.toDoDesc;


    //
    console.log(this.alteredRepair);

    if(f.value.option=="update")
    this.update();


    if(f.value.option=="delete")
    this.delete();
    

    if(f.value.option=="create")
      this.create(f);

  }

  create(f: any){
    this.newReapair.date=f.value.date;
      this.newReapair.description=f.value.description;
      this.newReapair.type=f.value.type;
      this.newReapair.status=f.value.status;
      this.newReapair.toDoDesc=f.value.toDoDesc;
      this.newReapair.cost=f.value.cost;
      this.newReapair.property=this.repair.property;

      this.service.createRepair(this.newReapair).pipe(first()).subscribe(
      data => {
        this.responseRepair = data;
        console.log(this.responseRepair);
      },
      error => {},
      () => {this.loading = false;}
    );
    if (this.responseRepair.id ==-1)
      {this.message="error creating repair";}
      else {this.message="Repair created!";
      this.repair=this.responseRepair;}}

      delete(){
        this.service.deleteRepair(this.alteredRepair.id).subscribe(
          data => {
            this.message = data;
          });    
      }
      update(){
        this.service.updateRepair(this.alteredRepair).pipe(first()).subscribe(
          data => {
            this.responseRepair = data;
            console.log(this.responseRepair);
          },
          error => {},
          () => {this.loading = false;}
        );
        if (this.responseRepair.id ==-1)
        this.message="Repair not found";
        else {this.message="Repair updated!";
        this.repair=this.responseRepair;}
      }
}
