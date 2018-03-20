import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {FormModel} from '../login/form.model';

@Injectable()
export class GovernmentService {

  userUrl = 'http://localhost:8000/government/allUsers/'

  constructor(private http : Http) { }

  data: any;

  findUser(name : string): Observable<any> {

    this.userUrl = 'http://localhost:8000/government/allUsers/'+name;
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let params: URLSearchParams = new URLSearchParams();
    
    let options = new RequestOptions({
      headers: headers
    });
     return this.http.get(this.userUrl, options)
    .map((response: Response) => {
      const result = response.json();
      this.data = result;
      return result;
    })
    .catch((error: Response | any) => {
      console.log(error.statusText);
      return Observable.throw(error);
    });
  }

  

}
