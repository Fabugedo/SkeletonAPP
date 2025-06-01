import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false
})
export class Tab1Page {
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    const usuarioValido = /^[a-zA-Z0-9]{3,8}$/.test(this.usuario);
    const contrasenaValida = /^[0-9]{4}$/.test(this.contrasena);

    if (!usuarioValido) {
      alert('El usuario debe tener entre 3 y 8 caracteres alfanuméricos.');
      return;
    }

    if (!contrasenaValida) {
      alert('La contraseña debe ser numérica y de exactamente 4 dígitos.');
      return;
    }


    this.router.navigate(['/tabs/tab2'], {
      state: { usuario: this.usuario }
    });
  }
}
