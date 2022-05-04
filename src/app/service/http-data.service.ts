import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor(private http:HttpClient) { 
  
  }

  url:any;
  urlAll:any;

  getUser(id: number){
    this.url = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/user/'+id;
    console.log(this.url);
    return this.http.get(this.url);
  }
  getAllUser(){
    this.urlAll = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/user/all';
    return this.http.get(this.urlAll);
  }
  createUser(user:any){
    this.url = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/user';
    return this.http.post(this.url,user);
  }
  updateUser(user:any){
    this.url = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/user';
    return this.http.put(this.url,user);
  }
  deleteUser(id:number){
    this.url = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/user/'+id;
    return this.http.delete(this.url);
  }
  getProperty(id: number){
    this.url = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/property/'+id;
    console.log(this.url);
    return this.http.get(this.url);
  }
  getAllProperty(){
    this.urlAll = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/property/all';
    return this.http.get(this.urlAll);
  }
  getPropertyByUser(id: number){
    this.urlAll = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/property/user/'+id;
    return this.http.get(this.urlAll);
  }
  createProperty(property:any){
    this.url = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/property';
    return this.http.post(this.url,property);
  }
  updateProperty(property:any){
    this.url = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/property';
    return this.http.put(this.url,property);
  }
  deleteProperty(property:any){
    this.url = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/property';
    return this.http.delete(this.url,property);
  }
  getRepair(id: number){
    this.url = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/repair/'+id;
    console.log(this.url);
    return this.http.get(this.url);
  }
  getAllRepair(){
    this.urlAll = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/repair/all';
    return this.http.get(this.urlAll);
  }
  getRepairByProperty(id: number){
    this.urlAll = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/repair/property/'+id;
    return this.http.get(this.urlAll);
  }
  createRepair(repair:any){
    this.url = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/repair';
    return this.http.post(this.url,repair);
  }
  updateRepair(repair:any){
    this.url = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/repair';
    return this.http.put(this.url,repair);
  }
  deleteRepair(repair:any){
    this.url = 'http://localhost:8080/RCAFullstack-1.0-SNAPSHOT/repair';
    return this.http.delete(this.url,repair);
  }

}
