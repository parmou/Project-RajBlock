import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SaveUserDetailsService {

  constructor(private http:Http ) { }

  updateUrl = "http://localhost:8000/saveUserDetail";
  update(fname,gender,phone, email,dob){
    this.http.post(this.updateUrl,{ "name":fname ,"gender":gender,"phone":phone,"email":email,"dob":dob})
    .subscribe((res)=>{
      console.log(res);
    });
  }
  //Call to the server for admin list

  adminUrl = "http://localhost:8000/admin/";
  fetchDeptEmp(deptName): Observable<any>{
    // return this.http.get(this.adminUrl+deptName);
    return this.http.get(this.adminUrl+deptName).map(res => res.json());
 }


//official status change
toggleUrl = "http://localhost:8000/toggle/";
changeStatus(_id, flag ):Observable<any>{
  return this.http.post(this.toggleUrl, { _id : _id, official: flag}).map(res => res.json());
}
 getUserURL = "http://localhost:8000/"
 getUser(key: string): Observable<any> {
  this.getUserURL = this.getUserURL+key;
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let params: URLSearchParams = new URLSearchParams();

    let options = new RequestOptions({
      headers: headers
    });
     return this.http.get(this.getUserURL, options)
    .map((response: Response) => {
      const result = response.json();
      return result;
    })
    .catch((error: Response | any) => {
      console.log(error.statusText);
      return Observable.throw(error);
    });
 }

 makeUserRequestURL = "http://localhost:8000/request"
 makeUserRequest(dept: string, email: string): Observable<any> {
  this.getUserURL = this.getUserURL+dept;
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    var creds = JSON.stringify({dept_id: dept,email: email})

    let params: URLSearchParams = new URLSearchParams();

    let options = new RequestOptions({
      headers: headers
    });
     return this.http.post(this.getUserURL, creds ,options)
    .map((response: Response) => {
      const result = response.json();
      return result;
    })
    .catch((error: Response | any) => {
      console.log(error.statusText);
      return Observable.throw(error);
    });
 }

}
