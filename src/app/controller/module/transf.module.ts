import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TransfComponent } from '../action/transf/transf.component';

@NgModule({
  declarations: [TransfComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
})
export class TransfModule {}
