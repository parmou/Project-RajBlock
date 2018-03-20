import { Component, OnInit } from '@angular/core';

import { GovernmentService } from '../../service/government.service'
@Component({
  selector: 'app-government',
  templateUrl: './government.component.html',
  styleUrls: ['./government.component.css']
})
export class GovernmentComponent implements OnInit {

  data: any;
  check:boolean = false;
  constructor( private government: GovernmentService) { }

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
        console.log(this.data)
      }
    );
  }

  toggle() {
    this.check = !this.check;
  }

}
