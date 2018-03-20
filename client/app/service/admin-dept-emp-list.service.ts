import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class AdminDeptEmpListService {

	deptName : any;


//Using setUserData method we can set the data and that can be used anywhere by using getUserData method


	getDeptName(){
		//console.log('getservice '+  this.deptName );
		return this.deptName;

	}

	//working
	setDeptName(name:any){
		this.deptName = name;
		//console.log('setservice '+  this.deptName );
		
	}

  constructor() { }

}
