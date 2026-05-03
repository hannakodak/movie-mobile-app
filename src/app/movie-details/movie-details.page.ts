import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie';
import { ActivatedRoute, Router } from '@angular/router';
import {addIcons} from 'ionicons';
import {home, heart} from 'ionicons/icons';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, IonButtons]
})
export class MovieDetailsPage implements OnInit {
  movie: any;
  cast: any[] = [];
  crew: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) { addIcons({home, heart});
  }
  
  ngOnInit() {

    // get movie passed from home page
    this.movie = history.state.movie;

    //get movie id from url
    const movieId = Number(this.route.snapshot.paramMap.get('id'));

    // get cast and crew for selected movie
    this.movieService.getMovieCredits(movieId).subscribe(data => {
     this.cast = (data as any).cast;
     this.crew = (data as any).crew;
    });

  }

  // go back home page 
  goHome(){
    this.router.navigate(['home'])
  }
  
  // go favourites page 
  goFavourites(){
    this.router.navigate(['favourites'])
  }
}
