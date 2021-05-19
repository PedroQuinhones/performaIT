import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: '../../../view/login/login.component.html',
  styleUrls: ['../../../view/login/login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup

  constructor(
    private router: Router,
    private formBuilder:FormBuilder
    ){
  }

  ngOnInit(){
    this.form = this.formBuilder.group({
      cod: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  goToInicio() {
      this.router.navigate(['/inicio']);
  }

  goToPrincipal() {
    if (this.form.invalid) {
      alert('Preencha os campos Código de acesso e Senha');
      return;
    }    if(this.form.value.cod != 'admin' || this.form.value.senha != '1234'){
      alert('Cod ou senha inválidos');
      return;
    }
    else{
      let login: Usuario = new Usuario();
      login = this.form.value;
      localStorage.setItem('usuario', JSON.stringify(login));
      this.router.navigate(['/principal']);
    }
  }

}
