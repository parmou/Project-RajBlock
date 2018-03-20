import { Component, OnInit } from '@angular/core';

import {SaveUserDetailsService} from '../service/save-user-details.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private service: SaveUserDetailsService) { }
  data:any;
  showModal: boolean =false;

  ngOnInit() {
  }

  loginUser(email : string) {
    /*this.user.loginUser(email).subscribe(
      (res) => {
        
      },
      (err) => {

      }
    );*/
  }

  getUser(publicKey: string) {
    this.service.getUser(publicKey).subscribe(
      (res) => {
        this.data = res;
        
      },
      (err) => {
        
      },
      () => {
        console.log(this.data);
        this.showModal = true
      }

    )
  }

  setModal() {
    this.showModal = false;
  }

}
