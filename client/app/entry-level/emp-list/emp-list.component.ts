import { Component, OnInit, Input } from '@angular/core';
import { AdminDeptEmpListService } from '../../service/admin-dept-emp-list.service';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { SaveUserDetailsService } from '../../service/save-user-details.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

	deptName:any;
	data :any;
  index:any;

  //for official not official handling
  status: any;

  constructor(private http: Http, private deptNameService : AdminDeptEmpListService, private deptNameRequest : SaveUserDetailsService) {
  	this.deptName = this.deptNameService.getDeptName();
  //	console.log("value passed");
}

changeOfficial(id,flag){
 
  console.log("com");
  this.deptNameRequest.changeStatus(id,flag).subscribe(
    (res)=>{this.status=res },
    (err)=>{console.log(err)},
    ()=>{console.log("aa"+ this.status);}
    );
console.log("com");
  
}

  ngOnInit() {
      this.deptNameRequest.fetchDeptEmp(this.deptName).subscribe( (res)=>{this.data=res },
    (err)=>{},
    ()=>{console.log(this.data);}
    );
      //console.log(this.data); 
  }

}
