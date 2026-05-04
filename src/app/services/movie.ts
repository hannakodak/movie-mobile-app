import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // this service is available everywhere
})
export class MovieService {

  // my API key
  private apiKey = '391592306b541274f588fc0d6c0ab983';

  //base link to the movie API
  private baseUrl = 'https://api.themoviedb.org/3';

  // using HttpClient to make request
  constructor(private http: HttpClient) {}

  // get trending movies for today
  getTrendingMovies() {
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`);
  }

  // search movies by keyword
  searchMovies(query: string) {
    return this.http.get(`${this.baseUrl}/search/movie?query=${query}&api_key=${this.apiKey}`);
  }

  // get cast and crew for selected movie
  getMovieCredits(movieId: number) {
    return this.http.get(`${this.baseUrl}/movie/${movieId}/credits?api_key=${this.apiKey}`);
  }

  // get person details
  getPersonDetails(personId: number) {
  return this.http.get(`${this.baseUrl}/person/${personId}?api_key=${this.apiKey}`);
  }

  // get movies for this person
  getPersonMovieCredits(personId: number) {
  return this.http.get(`${this.baseUrl}/person/${personId}/movie_credits?api_key=${this.apiKey}`);
  }
}