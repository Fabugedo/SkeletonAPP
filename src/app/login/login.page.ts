import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, FormsModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  usuario: string = '';
  contrasena: string = '';

  iniciarSesion() {
    console.log('Usuario-->', this.usuario);
    console.log('Contraseña-->', this.contrasena);
    alert('Sesión iniciada (simulada)');
  }
}

