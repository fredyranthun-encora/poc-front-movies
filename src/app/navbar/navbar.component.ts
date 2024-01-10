import { Component, Input } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {
  @Input() user: User | undefined;

  constructor(private userService: UserService) {}

  onLogout(): void {
    this.userService.logout();
  }
}
