import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-comments',
  standalone: true,
  imports: [CommonModule], // pode adicionar outros aqui se necessário
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss']
})
export class UserCommentsComponent {
  comments = [
    { user: 'Amanda', message: 'Adorei o conteúdo!', date: '30/04/2025' },
    { user: 'Carlos', message: 'Muito útil.', date: '29/04/2025' }
  ];

  trackByIndex(index: number): number {
    return index;
  }
}
