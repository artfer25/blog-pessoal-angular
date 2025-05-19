import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { PostService, Post } from '../../services/post.service';
import { FilterByTitlePipe } from '../../shared/pipes/filter-by-title.pipe';


@Component({
  selector: 'app-posts',
  standalone: true,
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  imports: [CommonModule, FormsModule, FilterByTitlePipe],
  providers: [PostService]
})
export class PostsComponent {
  posts: Post[] = [];
  filtroTitulo: string = '';
  postForm: FormGroup;

  constructor(
    private postService: PostService,
    private fb: FormBuilder
  ) {
    this.postForm = this.fb.group({
      title: [''],
      content: [''],
      userId: [1] 
    });
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe({
      next: (res: Post[]) => (this.posts = res),
      error: (err: any) => console.error('Erro ao buscar postagens:', err)
    });
  }

  createPost(): void {
    const novoPost = this.postForm.value;
    this.postService.createPost(novoPost).subscribe({
      next: (post) => {
        this.posts.push(post);
        this.postForm.reset();
        alert('Postagem criada com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao criar postagem:', err);
        alert('Erro ao criar postagem.');
      }
    });
  }
}
