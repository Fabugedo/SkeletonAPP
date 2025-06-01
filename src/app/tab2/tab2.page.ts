import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false
})
export class Tab2Page {
  usuario: string = '';
  nombre: string = '';
  apellido: string = '';

  constructor() {}

  capturarDatos() {
    if (!this.usuario || !this.nombre || !this.apellido) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    console.log('Usuario -->', this.usuario);
    console.log('Nombre -->', this.nombre);
    console.log('Apellido -->', this.apellido);
  }
}
