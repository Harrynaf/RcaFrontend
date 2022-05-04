import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { HttpDataService } from '../service/http-data.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

        user: any;
        responseUser:any;
        alteredUser={
          id:0,
          username: "",
          password: "",
          vat: "",
          name: "",
          surname: "",
          address: "",
          phone_number: "",
          email: "",
          user_Type: "",
        };
        newUser={
          username: "",
          password: "",
          vat: "",
          name: "",
          surname: "",
          address: "",
          phone_number: "",
          email: "",
          user_Type: "",
        };
        loading:boolean = true;
        id:any;
        message:any;

  constructor(private _Activatedroute:ActivatedRoute,private service:HttpDataService) { 
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = parseInt(params.get('id')!); 
      this.requestData();
  });
   
  }
  
  requestData(){
    this.service.getUser(this.id).pipe(first()).subscribe(
      data => {
        this.user = data;
      },
      error => {},
      () => {this.loading = false;}
    );
  }
  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    //
    if(f.value.username == '')
    f.value.username=this.user.username;
    if(f.value.vat == '')
    f.value.vat=this.user.vat;
    if(f.value.name == '')
    f.value.name=this.user.name;
    if(f.value.surname == '')
    f.value.surname=this.user.surname;
    if(f.value.address == '')
    f.value.address=this.user.address;
    if(f.value.phone_number == '')
    f.value.phone_number=this.user.phone_number;
    if(f.value.email == '')
    f.value.email=this.user.email;
    if(f.value.user_Type == '')
    f.value.user_Type=this.user.user_Type;  
    //
    this.alteredUser.id=this.user.id;
    this.alteredUser.username=f.value.username;
    this.alteredUser.password=f.value.password;
    this.alteredUser.vat=f.value.vat;
    this.alteredUser.name=f.value.name;
    this.alteredUser.surname=f.value.surname;
    this.alteredUser.address=f.value.address;
    this.alteredUser.phone_number=f.value.phone_number;
    this.alteredUser.email=f.value.email;   
    this.alteredUser.user_Type=f.value.user_Type;  
    //
    console.log(this.alteredUser);

    if(f.value.option=="update")
    this.update();


    if(f.value.option=="delete")
    this.delete();
    

    if(f.value.option=="create")
      this.create(f);

  }

  create(f: any){
    this.newUser.username=f.value.username;
      this.newUser.password=f.value.password;
      this.newUser.vat=f.value.vat;
      this.newUser.name=f.value.name;
      this.newUser.surname=f.value.surname;
      this.newUser.address=f.value.address;
      this.newUser.phone_number=f.value.phone_number;
      this.newUser.email=f.value.email;   
      this.newUser.user_Type=f.value.user_Type;  

      this.service.createUser(this.newUser).pipe(first()).subscribe(
      data => {
        this.responseUser = data;
      },
      error => {},
      () => {this.loading = false;}
    );
    if (this.responseUser.id ==-1)
      {this.message="User taken";}
      else {this.message="User created!";
      this.user=this.responseUser;}}

      delete(){
        this.service.deleteUser(this.alteredUser.id).subscribe(
          data => {
            this.message = data;
          });    
      }
      update(){
        this.service.updateUser(this.alteredUser).pipe(first()).subscribe(
          data => {
            this.responseUser = data;
          },
          error => {},
          () => {this.loading = false;}
        );
        if (this.responseUser.id ==-1)
        this.message="User not found";
        else {this.message="User updated!";
        this.user=this.responseUser;}
      }
}
