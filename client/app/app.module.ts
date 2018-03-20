import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { APP_ROUTES_PROVIDER } from './app.routes';
import { FileSelectDirective } from 'ng2-file-upload';
import { FileUploadModule } from 'ng2-file-upload';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { UserComponent } from './entry-level/user/user.component';
import { GovernmentComponent } from './entry-level/government/government.component';
import { NavbarComponent } from './entry-level/government/compontents/navbar/navbar.component';
import { GovernmentService } from '../app/service/government.service';
import { SaveUserDetailsService } from '../app/service/save-user-details.service';
import { AdminComponent } from './entry-level/admin/admin.component';
import { AdminDeptEmpListService } from '../app/service/admin-dept-emp-list.service';
import { EmpListComponent } from './entry-level/emp-list/emp-list.component';
import { SignupService } from './service/signup.service';
import { SaveFileComponent } from './entry-level/government/compontents/save-file/save-file.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    UserComponent,
    GovernmentComponent,
    NavbarComponent,
    AdminComponent,
    EmpListComponent,
    SaveFileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FileUploadModule,
    APP_ROUTES_PROVIDER
  ],
  providers: [GovernmentService,SaveUserDetailsService, AdminDeptEmpListService, SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
