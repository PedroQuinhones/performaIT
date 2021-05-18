import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: '../../../view/principal/principal.component.html',
  styleUrls: ['../../../view/principal/principal.component.css']
})
export class PrincipalComponent implements OnInit {
  constructor(
      private router: Router
  ) { }

  ngOnInit() {
    let verify = localStorage.getItem('usuario');
    if(verify == null || verify == undefined){
      this.goToInicio();
    }
  }

  goToInicio() {
    this.router.navigate(['/inicio']);
}

goToTransf() {
  this.router.navigate(['/transf']);
}
}
