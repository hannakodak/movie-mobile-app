import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonInput } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, FormsModule, IonButton, IonItem, IonInput],
})
export class HomePage {

  movies: any[] = []; // store movies
  searchText: string =''; // search input text
  pageTitle: string = "Today's Trending Movies";

  // connect the movie service
  constructor(private movieService: MovieService) {}

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
}
