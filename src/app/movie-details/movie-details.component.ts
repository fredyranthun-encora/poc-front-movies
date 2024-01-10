import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MovieSearchService } from '../movie-search.service';
import { IMovieDetails } from '../i-movie-details';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.sass'
})
export class MovieDetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  movie: IMovieDetails | undefined;

  constructor(private movieSearchService: MovieSearchService) {
    const movieId = Number(this.route.snapshot.params['id']);
    this.movieSearchService.getMovieDetails(movieId).subscribe(data => {
      this.movie = data;
    })
  }
}
