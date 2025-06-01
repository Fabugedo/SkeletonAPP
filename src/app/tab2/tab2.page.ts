import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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
  nivel: string = '';
  fechaNacimiento: string = '';

  cargando: boolean = false; //

  @ViewChild('nombreInput', { read: ElementRef }) nombreInput!: ElementRef;
  @ViewChild('apellidoInput', { read: ElementRef }) apellidoInput!: ElementRef;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.['usuario']) {
      this.usuario = navigation.extras.state['usuario'];
    }
  }

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.nivel = '';
    this.fechaNacimiento = '';

    // Lanza animación a los campos
    this.animarElemento(this.nombreInput.nativeElement);
    this.animarElemento(this.apellidoInput.nativeElement);
  }

  mostrarDatos() {
    if (!this.nombre || !this.apellido || !this.nivel || !this.fechaNacimiento) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    this.cargando = true;

    setTimeout(() => {
      this.cargando = false;
      alert(`Su nombre es ${this.nombre} ${this.apellido}`);
    }, 1500);
  }

  animarElemento(elemento: HTMLElement) {
    elemento.style.transition = 'transform 1s';
    elemento.style.transform = 'translateX(100px)';


    setTimeout(() => {
      elemento.style.transform = 'translateX(0)';
    }, 1000);
  }
}
