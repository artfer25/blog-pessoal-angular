import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../../services/post.service';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  post: Post = {
    title: '', content: '',
    userId: 0
  };

  constructor(private postService: PostService) {}

  createPost(): void {
    this.postService.createPost(this.post).subscribe({
      next: () => alert('Post criado com sucesso!'),
      error: () => alert('Erro ao criar o post.')
    });
  }
}