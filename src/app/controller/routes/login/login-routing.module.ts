import { Routes } from '@angular/router';

import { LoginComponent } from '../../action/login/login.component';


export const LoginRoutes: Routes = [
	{ 
		path: 'login', 
		redirectTo: 'login' 
	},
	{ 
		path: 'login', 
		component: LoginComponent 
	}, 

];
