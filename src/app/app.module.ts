import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './controller/module/login.module';
import { TransfModule } from './controller/module/transf.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    TransfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
