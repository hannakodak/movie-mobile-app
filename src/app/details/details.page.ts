import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton, IonButtons, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie';
import { addIcons } from 'ionicons';
import { home, heart } from 'ionicons/icons'

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonButton, IonButtons, IonCard, IonCardContent]
})
export class DetailsPage implements OnInit {
  person: any;
  movies: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {
    addIcons({ home, heart })
  }

  ngOnInit() {
    const personId = Number(this.route.snapshot.paramMap.get('id'));

    // get person details
    this.movieService.getPersonDetails(personId).subscribe(data => {
      this.person = data;
    });

    // get movies for this person
    this.movieService.getPersonMovieCredits(personId).subscribe(data => {
      this.movies = (data as any).cast;
    });
  }

  // go back home page 
  goHome() {
    this.router.navigate(['home'])
  }

  // go favourites page 
  goFavourites() {
    this.router.navigate(['favourites'])
  }
}

