import { Routes } from '@angular/router';

import { InicioComponent } from '../../action/inicio/inicio.component';


export const InicioRoutes: Routes = [
	{ 
		path: 'inicio', 
		redirectTo: 'inicio' 
	},
	{ 
		path: 'inicio', 
		component: InicioComponent 
	}, 

];
