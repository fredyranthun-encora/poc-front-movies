import { Injectable } from '@angular/core';
import { IResponse } from './i-response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovieDetails } from './i-movie-details';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {
  
  baseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  getMovies(query: string, page: number = 1): Observable<IResponse> {
    return this.http.get<IResponse>(`${this.baseUrl}/search/movie`, {
      params: {
        page,
        query
      }
    })
  }

  getMovieDetails(movieId: number): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(`${this.baseUrl}/movie/${movieId}`);
  }
}
