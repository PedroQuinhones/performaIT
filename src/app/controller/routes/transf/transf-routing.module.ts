import { Routes } from '@angular/router';

import { TransfComponent } from '../../action/transf/transf.component';


export const TransfRoutes: Routes = [
	{ 
		path: 'transf', 
		redirectTo: 'transf' 
	},
	{ 
		path: 'transf', 
		component: TransfComponent
	}, 

];
