import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonInput, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {addIcons} from 'ionicons';
import {heart} from 'ionicons/icons';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, FormsModule, IonButton, IonItem, IonInput, IonIcon, IonButtons],
})
export class HomePage {

  movies: any[] = []; // store movies
  searchText: string =''; // search input text
  pageTitle: string = "Today's Trending Movies";

  // connect the movie service
  constructor(
    private movieService: MovieService,
    private router: Router
  ) {
    addIcons({heart});
  }

  //runs when page loads
  ngOnInit() {
    //call API adn get data
    this.movieService.getTrendingMovies().subscribe(data => {
      
      //save movies to show on screen
      this.movies = (data as any).results;
    });
  }

  // search movies using text entered by user or show trending if search box empty
  searchMovies() {

    if (this.searchText.trim() === '') {
      this.movieService.getTrendingMovies().subscribe(data => {
        this.movies = (data as any).results;
      });
    } else {
      this.pageTitle = this.searchText + ' Movies';
      this.movieService.searchMovies(this.searchText).subscribe(data => {
      this.movies = (data as any).results;
      });
    }
  }

  // navigate to movie details aftern click
  openMovie(movie: any) {
    this.router.navigate(['movie-details', movie.id], {
      state: {movie: movie}
    });
  }
}
