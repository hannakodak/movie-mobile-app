import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  // connect the movie service
  constructor(private movieService: MovieService) {}

  //runs when page loads
  ngOnInit() {
    //call API adn get data
    this.movieService.getTrendingMovies().subscribe(data => {
      
      //show result in console
      console.log(data);
    });
  }
}
