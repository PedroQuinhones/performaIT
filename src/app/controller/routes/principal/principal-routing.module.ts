import { Routes } from '@angular/router';

import { PrincipalComponent } from '../../action/principal/principal.component';


export const PrincipalRoutes: Routes = [
	{ 
		path: 'principal', 
		redirectTo: 'principal' 
	},
	{ 
		path: 'principal', 
		component: PrincipalComponent
	}, 

];
