import {Routes,RouterModule} from '@angular/router';

import {LandingComponent} from './landing/landing.component'
import {UserComponent} from './entry-level/user/user.component'
import { LoginComponent } from './login/login.component'
import {GovernmentComponent} from './entry-level/government/government.component'
import { EmpListComponent } from  './entry-level/emp-list/emp-list.component'
import { AdminComponent } from './entry-level/admin/admin.component'


const routes: Routes = [
    {
        path:'', 
        component: LandingComponent
    },
    {
        path:'user',
        component: UserComponent
    },
    {
        path:'government',
        component: GovernmentComponent
    },
    {
        path:'emplist',
        component:EmpListComponent
    },
    {
        path:'admin',
        component:AdminComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
   
]

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(routes);