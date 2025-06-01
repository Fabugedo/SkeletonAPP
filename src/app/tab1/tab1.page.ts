import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false
})
export class Tab1Page {

  usuario: string = '';
  contrasena: string = '';

  constructor() {}

  iniciarSesion() {
    if (!this.usuario || !this.contrasena) {
      alert('Por favor, complete ambos campos.');
      return;
    }

    console.log('Usuario ingresado:', this.usuario);
    console.log('Contraseña ingresada:', this.contrasena);
  }
}
