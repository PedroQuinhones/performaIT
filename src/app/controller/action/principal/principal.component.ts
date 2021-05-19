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
    {valor: 230.23, conta:'23PQ'},
    {valor: 173, conta:'56-c4'},
    {valor: 130.77, conta:'h1gg-0'},
];
  public saldo: number = 7700;
  public data:string = 'Desde o Início';


  addTransf(verifyFiltro){
    this.filtros.push(JSON.parse(verifyFiltro))
    let soma = this.saldo + JSON.parse(verifyFiltro).valor;
    this.saldo = soma;
  }
  ngOnInit() {
    let verify = localStorage.getItem('usuario');
    if(verify == null || verify == undefined){
      this.goToInicio();
    }
    let verifyFiltro = localStorage.getItem('transf');
    if(verifyFiltro){
      this.addTransf(verifyFiltro);
      //end listaFiltro 4º posição
    }
  }

  goToInicio() {
    this.router.navigate(['/inicio']);
}

  goToTransf() {
    this.router.navigate(['/transf']);
  }

  setarFiltroInicioRsRs(){
    this.data = 'Desde o Início';
    this.shuffle(this.filtros)
  }

   shuffle(filtros) {
    var currentIndex = filtros.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = filtros[currentIndex];
      filtros[currentIndex] = filtros[randomIndex];
      filtros[randomIndex] = temporaryValue;
    }
    return filtros;
  }

  setarFiltroEsteMesRsRs(){
    this.data = 'Este Mês';
    this.shuffle(this.filtros)
  }

  setarFiltro3MesesRsRs(){
    this.data = '3 Meses';
    this.shuffle(this.filtros)
  }

}
