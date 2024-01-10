import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {

  title = 'movies';
  loggedIn = false; 
  user: User | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() {
    if (this.userService.loggedIn) {
      this.loggedIn = true;
      this.user = this.userService.loggedUser;
    }
  }

}
