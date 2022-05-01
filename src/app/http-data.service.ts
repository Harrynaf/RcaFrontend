import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  id:any;
  constructor(private http:HttpClient) { 
  
  }

  url:any;
  urlAll:any;

  getUser(id: number){
    this.id=id;
    this.url = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/user/'+this.id;
    console.log(this.url);
    return this.http.get(this.url);
  }
  getAllUser(){
    this.urlAll = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/user/all';
    return this.http.get(this.urlAll);
  }
  getProperty(id: number){
    this.id=id;
    this.url = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/property/'+this.id;
    console.log(this.url);
    return this.http.get(this.url);
  }
  getAllProperty(){
    this.urlAll = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/property/all';
    return this.http.get(this.urlAll);
  }
  getRepair(id: number){
    this.id=id;
    this.url = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/repair/'+this.id;
    console.log(this.url);
    return this.http.get(this.url);
  }
  getAllRepair(){
    this.urlAll = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/repair/all';
    return this.http.get(this.urlAll);
  }

  // get(){
  //   return ['Alice', 'Bob', 'Claire', 'David'];
  // }

  // get(){
  //   return [
  //     {first_name: 'Alice', age: 19}, 
  //     {first_name: 'Bob', age:21}
  //   ]
  // }

}
