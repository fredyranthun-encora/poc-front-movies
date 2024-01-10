import { Component, Input } from '@angular/core';
import { MovieResponse } from '../movie-response';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.sass'
})
export class MovieComponent {
  @Input() movie!: MovieResponse;

  handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).src = '/assets/icon-image-not-found.jpg'
  }
}
