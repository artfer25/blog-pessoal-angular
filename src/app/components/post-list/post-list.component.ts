import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  posts = [
    {
      title: 'Como melhorar sua produtividade com Angular',
      description: 'Dicas práticas e rápidas para organizar seu código e ser mais eficiente.',
      author: 'Henrique Araújo',
      date: '30/04/2025'
    },
    {
      title: 'Entendendo Standalone Components',
      description: 'O que são, como funcionam e por que você deve adotá-los no Angular moderno.',
      author: 'Henrique Araújo',
      date: '29/04/2025'
    }
  ];
}
``
