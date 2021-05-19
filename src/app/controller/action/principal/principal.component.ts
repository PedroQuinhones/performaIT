import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transf } from 'src/app/model/transf.model';

@Component({
  selector: 'app-principal',
  templateUrl: '../../../view/principal/principal.component.html',
  styleUrls: ['../../../view/principal/principal.component.css']
})
export class PrincipalComponent implements OnInit {
  constructor(
      private router: Router
  ) { }


  public transferencia:Transf = new Transf();

  public filtros = [
    {valor: 230, conta:'c315'},
    {valor: 170, conta:'56c4'},
    {valor: 130, conta:'h1gg'},
];


  addTransf(verifyFiltro){
    this.filtros.push(JSON.parse(verifyFiltro))
  }
  ngOnInit() {
    let verify = localStorage.getItem('usuario');
    if(verify == null || verify == undefined){
      this.goToInicio();
    }
    let verifyFiltro = localStorage.getItem('transf');
    if(verifyFiltro){
      this.addTransf(verifyFiltro);
      //end listaFiltro
    }
  }

  goToInicio() {
    this.router.navigate(['/inicio']);
}

  goToTransf() {
    this.router.navigate(['/transf']);
  }

}
