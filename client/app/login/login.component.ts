import { Component, OnInit } from '@angular/core';
import { FormModel } from './form.model';
import { SignupService } from '../service/signup.service';
import { Router } from '@angular/router';
import { LoginModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private signupService: SignupService, private router: Router) { }
  
  registered = true;
  data: any;
  ngOnInit() {
  }

  

  
  register(){
    this.registered = !this.registered;
  }
  signup(value: FormModel){
    this.signupService.getRespForSignup(value)
                      .subscribe(
                        (res) => {
                          console.log(res);
                        },
                        (error) =>   {console.log('this is error');
                                      console.log(error);
                                    },
                        () => {
                          
                        }
                      );
  }

  login(value: LoginModel){
    console.log(value);
    this.signupService.getRespForLogin(value)
                      .subscribe(
                        (res) => {
                          this.data = res;
                          
                        },
                        (error) => {
                          
                        },
                        () => {
                          
                          if(this.data._body === 'admin') {
                            this.router.navigate(['/admin'])
                          }
                          this.data = this.data.json();
                          if(this.data[0].official) {
                            this.router.navigate(['/government'])
                          } else {
                            this.router.navigate(['/user'])
                          }
                          
                        }
                      );
  }
}
