import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.scss']
})
export class SignInModalComponent {
  @Output() fechar = new EventEmitter<void>();

  usuario: string = '';
  email: string = '';
  senha: string = '';

  fecharModal() {
    this.fechar.emit();
  }

  cadastrar() {
    console.log('Usuário:', this.usuario);
    console.log('Email:', this.email);
    console.log('Senha:', this.senha);
    alert('Conta criada com sucesso!');
    this.fechar.emit(); // fecha o modal após cadastro
  }
}
