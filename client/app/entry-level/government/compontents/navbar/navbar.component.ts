import { Component, OnInit } from '@angular/core';

import { GovernmentService } from '../../../../service/government.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  data:any;

  constructor(private government: GovernmentService) { }

  ngOnInit() {
  }

  findUser(name : string) {
    this.government.findUser(name).subscribe(
      (res) => {
        this.data = res;
      },
      (error) => {
        console.log('error');
      },
      () => {
        
      }
    );
  }

}
