import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incio',
  templateUrl: '../../../view/inicio/inicio.component.html',
  styleUrls: ['../../../view/inicio/inicio.component.css']
})
export class InicioComponent implements OnInit {
  constructor(
      private router: Router
  ) { }

  ngOnInit() {

  }

  goToLogin() {
    this.router.navigate(['/login']);
}
}
