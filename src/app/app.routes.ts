import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './login.guard';

export const routes: Routes = [
  {
    path: "",
    component: MoviesComponent,
    title: "Movies",
    canActivate: [loginGuard],
  },
  {
    path: "movie-details/:id",
    component: MovieDetailsComponent,
    title: "Movie Details",
    canActivate: [loginGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    title: "Login"
  }
];
