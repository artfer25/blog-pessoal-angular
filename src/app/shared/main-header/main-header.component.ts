import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
  @Output() loginClick = new EventEmitter<void>();
  notificarLogin() {
    this.loginClick.emit();
  }
  @Output() signInClick = new EventEmitter<void>();
}

