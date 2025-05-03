import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterByTitlePipe } from "../../shared/pipes/filter-by-title.pipe"; 
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterByTitlePipe],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  posts = [
    {
      title: 'Como melhorar sua produtividade com Angular',
      summary: 'Dicas práticas e rápidas para organizar melhor seus projetos e componentes.',
      author: 'Henrique Araújo',
      date: '30/04/2025',
    },
    {
      title: 'Entendendo Standalone Components',
      summary: 'O que são, como funcionam e por que adotá-los no Angular moderno.',
      author: 'Equipe Brainstorm',
      date: '29/04/2025',
    }
  ];
filtroTitulo: any;
}
