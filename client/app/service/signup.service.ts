import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {FormModel} from '../login/form.model';
import { LoginModel } from '../login/login.model';

@Injectable()
export class SignupService {

  constructor(private http : Http) { }

  url= "http://localhost:8000/";

  data: any;
  getRespForSignup(obj: {}) : Observable<FormModel>{
    console.log('from service.ts ' + obj.toString());
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers,
    });
     return this.http.post(this.url+'user/signup',obj, options)
    .map((response: Response) => {
      const result = response.json();
      return result;
    })
    .catch((error: Response | any) => {
      console.log(error.statusText);
      return Observable.throw(error);
    });
  }


  getRespForLogin(obj: {}) : Observable<LoginModel>{
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers,
    });
    console.log(obj);
     return this.http.post(this.url+'user/login',obj, options)
    .map((response: Response) => {
      this.data = response;
      return response;
    })
    .catch((error: Response | any) => {
      console.log(error.statusText);
      return Observable.throw(error);
    });
  }

}
