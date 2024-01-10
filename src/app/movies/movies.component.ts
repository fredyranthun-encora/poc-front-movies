import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { MovieSearchComponent } from '../movie-search/movie-search.component';
import { IResponse } from '../i-response';
import { MovieSearchService } from '../movie-search.service';
import { WordsService } from '../words.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, MovieComponent, PaginationComponent, MovieSearchComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.sass'
})
export class MoviesComponent implements OnInit {
  queryWord: string = "";
  currentPage: number = 1;
  movies: IResponse | undefined;
  
  constructor(
    private movieSearchService: MovieSearchService,
    private wordsService: WordsService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    const storedQuery = this.storageService.getData("MOVIES_QUERY") as string;
    const storedData = this.storageService.getData("MOVIES_DATA") as IResponse | undefined;

    this.queryWord = storedQuery ?? this.wordsService.generateWord();
    if (storedData) {
      this.movies = storedData;
      this.currentPage = storedData.page;
      return;
    }
    this.movieSearchService.getMovies(this.queryWord, this.currentPage).subscribe(data => {
      this.updateMovieData(data);
    })
  }

  changeQueryWord(word: string) {
    this.queryWord = word;
    this.currentPage = 1;
    this.movieSearchService.getMovies(this.queryWord, this.currentPage).subscribe(data => {
      this.updateMovieData(data);
    })
  }

  changePage(page: number) {
    this.currentPage = page;
    this.movieSearchService.getMovies(this.queryWord, this.currentPage).subscribe(data => {
      this.updateMovieData(data);
    })
  }

  updateMovieData(data: IResponse) {
    this.movies = data;
    this.storageService.setData("MOVIES_QUERY", this.queryWord);
    this.storageService.setData("MOVIES_DATA", this.movies);
  }

}
