import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { ILogin } from './i-login';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private storageService: StorageService) { }

  login(user: Omit<User, "id">) {
    this.mockLoginUser(user).subscribe(response => {
      if (!response.success) {
        return;
      }
      this.storageService.setData("LOGGED_USER", btoa(JSON.stringify(response.user)));
      this.storageService.setData("USER_TOKEN", btoa(response.token as string));
            
      this.router.navigate(['']);
    });
  }

  private mockLoginUser(user: Omit<User, "id">): Observable<ILogin> {
    if (user.email === "user.email@mail.com" && user.password === '@user.password') {
      const loggedUser: User = {...user, id: 1}
      return of({
        success: true,
        user: loggedUser, 
        token: JSON.stringify({ user }),
      })
    }

    return of({
      success: false,
      user: null,
      token: null
    })
  }

  logout() {
    this.storageService.removeData("LOGGED_USER");
    this.storageService.removeData("USER_TOKEN");
    this.router.navigate(['login']);
  }

  get loggedUser(): User {
    const user = this.storageService.getData("LOGGED_USER");
    return user 
      ? JSON.parse(atob(user as string)) 
      : null;
  }

  get token(): string | null {
    const token = this.storageService.getData("USER_TOKEN");
    return token
      ? atob(token as string)
      : null;
  }

  get loggedIn(): boolean {
    return !!this.storageService.getData("USER_TOKEN");
  }
}
