import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService, AuthRequest } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {
  @Input() mostrar = false;
  @Output() fechar = new EventEmitter<void>();

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  fecharModal() {
    this.fechar.emit();
  }

  login() {
    const req: AuthRequest = {
      username: this.username,
      password: this.password
    };

    this.authService.login(req).subscribe({
      next: (res) => {
        console.log('Usuário logado! Token:', res.token);
        localStorage.setItem('token', res.token);
        this.fecharModal(); 
      },
      error: (err) => {
        console.error('Erro no login:', err);
        alert('Usuário ou senha inválidos');
      }
    });
  }
}
