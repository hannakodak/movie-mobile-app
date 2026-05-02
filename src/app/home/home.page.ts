import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],
})
export class HomePage {

  movies: any[] = []; // store movies

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
}
