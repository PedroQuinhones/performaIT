import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { PrincipalComponent } from '../action/principal/principal.component';

@NgModule({
  declarations: [PrincipalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
})
export class PrincipalModule {}
