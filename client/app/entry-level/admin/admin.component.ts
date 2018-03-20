import { Component, OnInit } from '@angular/core';
import { SaveUserDetailsService } from '../../service/save-user-details.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AdminDeptEmpListService } from '../../service/admin-dept-emp-list.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	deptName : any ;



	public departments:any[]=[
			{ "name" : "Passport"},
			{ "name" : "PAN-Card"},
			{ "name" : "Aadhaar"},
			{ "name" : "Birth-Certificate"},
			{ "name" : "License"},
			{ "name" : "PWD"}
			
	];

	

  constructor(private deptNameService : AdminDeptEmpListService) {
	 }

  ngOnInit() {
  }
  toDepartment(deptName){ 
  //alert(deptName);
  this.deptNameService.setDeptName(deptName);
   }
 

}
