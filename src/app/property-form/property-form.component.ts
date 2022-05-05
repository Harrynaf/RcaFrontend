import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { HttpDataService } from '../service/http-data.service';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.scss']
})
export class PropertyFormComponent implements OnInit {

  property: any;
  loading: boolean = true;
  id: any;
  alteredProperty = {
    "id": 0,
    "eCode": "",
    "address": "",
    "constructionYear": "",
    "type": "",
    "owner": {
      "id": 0,
    }
  };
  newProperty = {
    "eCode": "",
    "address": "",
    "constructionYear": "",
    "type": "",
    "owner": {
      "id": 0,
    }
  };
  responseProperty: any;
  message: any;
  loggedUserid = 0;
  constructor(private _Activatedroute: ActivatedRoute, private service: HttpDataService) {
    this._Activatedroute.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id')!);
      if (this.id!=0)
      this.requestData();
      else this.property=this.newProperty;
      let URL = window.location.href;
      let URL_AS_LIST = (URL).split('/');
      this.loggedUserid = parseInt(URL_AS_LIST[4]);
    })
  };

  ngOnInit(): void {
  }
  requestData() {
    this.service.getProperty(this.id).pipe(first()).subscribe(
      data => {
        this.property = data;
      },
      error => { },
      () => { this.loading = false; }
    );
  }

  onSubmit(f: NgForm) {
    if (f.value.eCode == '')
      f.value.eCode = this.property.eCode;
    if (f.value.address == '')
      f.value.address = this.property.address;
    if (f.value.constructionYear == '')
      f.value.constructionYear = this.property.constructionYear;
    if (f.value.type == '')
      f.value.type = this.property.type;

    //
    this.alteredProperty.id = this.property.id;
    this.alteredProperty.owner = this.property.owner;
    this.alteredProperty.eCode = f.value.eCode;
    this.alteredProperty.address = f.value.address;
    this.alteredProperty.constructionYear = f.value.constructionYear;
    this.alteredProperty.type = f.value.type;


    //
    console.log(this.alteredProperty);

    if (f.value.option == "update")
      this.update();


    if (f.value.option == "delete")
      this.delete();


    if (f.value.option == "create")
      this.create(f);

  }

  create(f: any) {
    this.newProperty.owner.id = this.loggedUserid;
    this.newProperty.eCode = f.value.eCode;
    this.newProperty.address = f.value.address;
    this.newProperty.type = f.value.type;
    this.newProperty.constructionYear = f.value.constructionYear;
    this.newProperty.type = f.value.type;



    console.log(this.newProperty);
    this.service.createProperty(this.newProperty).pipe(first()).subscribe(
      data => {
        this.responseProperty = data;
      },
      error => { },
      () => { this.loading = false; }
    );
    if (this.responseProperty.id == -1) { this.message = "error creating property"; }
    else {
      this.message = "property created!";
      this.property = this.responseProperty;
    }
  }

  delete() {
    this.service.deleteProperty(this.alteredProperty.id).subscribe(
      data => {
        this.message = data;
      });
      this.message = "Deleted";
  }
  update() {
    console.log(this.alteredProperty);
    this.service.updateProperty(this.alteredProperty).pipe(first()).subscribe(
      data => {
        this.responseProperty = data;
      },
      error => { },
      () => { this.loading = false; }
    );
    if (this.responseProperty.id == -1)
      this.message = "property not found";
    else {
      this.message = "property updated!";
      this.property = this.responseProperty;
    }
  }

}
