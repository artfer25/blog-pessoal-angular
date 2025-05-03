import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { UserCommentsComponent } from "../../components/user-comments/user-comments.component";
import { PostListComponent } from '../../components/post-list/post-list.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, UserCommentsComponent, PostListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
