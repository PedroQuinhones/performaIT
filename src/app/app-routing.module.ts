import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioRoutes } from './controller/routes/inicio/inicio-routing.module';
import { LoginRoutes } from './controller/routes/login/login-routing.module';
import { PrincipalRoutes } from './controller/routes/principal/principal-routing.module';
import { TransfRoutes } from './controller/routes/transf/transf-routing.module';

export const routes: Routes = [
  { 
		path: '', 
		redirectTo: 'inicio', 
		pathMatch: 'full' 
	},
	...InicioRoutes,
  	...LoginRoutes,
	...PrincipalRoutes,
	...TransfRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
