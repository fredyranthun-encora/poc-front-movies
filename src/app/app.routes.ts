import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

export const routes: Routes = [
  {
    path: "",
    component: MoviesComponent,
    title: "Movies",
  },
  {
    path: "movie-details/:id",
    component: MovieDetailsComponent,
    title: "Movie Details"
  }

];
