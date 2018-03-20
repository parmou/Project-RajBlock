import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { SaveUserDetailsService } from '../../service/save-user-details.service';
import {SignupService} from '../../service/signup.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userData:any;

  departments : any[] = [
      {
        "name" : "Passport",
        "applied" : true,
        "id": "Driving License"
      },
      {
        "name" : "Driving License",
        "applied" : true,
        "id": "DrivingLiscence_id"
      },
      {
        "name" : "PAN",
        "applied" : false,
        "id": "PANCard_id"
      },
      {
        "name" : "Domicile",
        "applied" : true,
        "id": "BirthCertificate_id"
      },
      {
        "name" : "Aadhar",
        "applied" : false,
        "id": "AadharCard_id"
      }
    ];

  constructor(private http: Http, private userSaveDetails: SaveUserDetailsService, private service: SignupService) { }

  ngOnInit() {
    this.userData = this.service.data;
  }

  update(name, gender, phone, email, dob){
    console.log(name+" "+gender+" "+phone+" "+email+" "+dob);
    this.userSaveDetails.update(name,gender,phone,email,dob);
  }

  reset(){

  }

  makeRequest(dept: string) {
    
  }

}
