import { MovieResponse } from "./movie-response";

export interface IResponse {
  page: number;
  results: MovieResponse[];
  total_pages: number;
  total_results: number;
}
