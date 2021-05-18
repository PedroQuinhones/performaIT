import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Transf } from 'src/app/model/transf.model';

@Component({
  selector: 'app-transf',
  templateUrl: '../../../view/transf/transf.component.html',
  styleUrls: ['../../../view/transf/transf.component.css']
})
export class TransfComponent implements OnInit {
  form:FormGroup
  constructor(
      private router: Router,
      private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    let verify = localStorage.getItem('usuario');
    if(verify == null || verify == undefined){
      this.goToInicio();
    }
    this.form = this.formBuilder.group({
      valor: ['', Validators.required],
      conta: ['', Validators.required],
    });

  }

  goToPrincipal() {
    this.router.navigate(['/principal']);
}

  goToInicio() {
  this.router.navigate(['/inicio']);
}

enviarTransf() {
  if (this.form.invalid) {
    alert('Preencha os campos Valor e Conta')
    return
  }
  let transf: Transf = new Transf();
  transf = this.form.value;
  localStorage.setItem('transf', JSON.stringify(transf))
  alert('Transferência realizada')
  this.router.navigate(['/inicio']);
}
}
