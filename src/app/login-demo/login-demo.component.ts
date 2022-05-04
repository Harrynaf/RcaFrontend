import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { HttpDataService } from '../service/http-data.service';

@Component({
  selector: 'app-login-demo',
  templateUrl: './login-demo.component.html',
  styleUrls: ['./login-demo.component.scss']
})
export class LoginDemoComponent implements OnInit {
  id:any;
  user: any;

  constructor(private _Activatedroute:ActivatedRoute,private service:HttpDataService) { 
    this._Activatedroute.paramMap.subscribe(params => { 
    this.id = parseInt(params.get('id')!);})};

  ngOnInit(): void {
    this.requestData();
  }
  requestData(){
    
    this.service.getUser(this.id).pipe(first()).subscribe(
      data => {
        this.user = data;}
    );
  }
}

