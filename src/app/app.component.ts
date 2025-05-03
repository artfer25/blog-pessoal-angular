import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackButtonComponent } from './shared/back-button/back-button.component';
import { MainHeaderComponent } from './shared/main-header/main-header.component';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from "./shared/login-modal/login-modal.component";
import { SignInModalComponent } from './shared/sign-in-modal/sign-in-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainHeaderComponent, CommonModule, LoginModalComponent,SignInModalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  mostrarModal = false;
mostrarSignUp: any;

  abrirModal() {
    this.mostrarModal = true;
  }

  fecharModal() {
    this.mostrarModal = false;
  }
  mostrarSignIn = false;

abrirSignIn() {
  this.mostrarSignIn = true;
}

fecharSignIn() {
  this.mostrarSignIn = false;
}
}
