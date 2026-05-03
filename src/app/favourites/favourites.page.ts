import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,  IonButton, IonIcon, IonButtons} from '@ionic/angular/standalone';
import { FavouritesService } from '../services/favourites';
import { ActivatedRoute, Router } from '@angular/router';
import {addIcons} from 'ionicons';
import {home} from 'ionicons/icons';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,  IonButton, IonIcon, IonButtons]
})
export class FavouritesPage implements OnInit {
  favourites: any[] = [];

  constructor(
    private favouritesService: FavouritesService,
    private route: ActivatedRoute,
    private router: Router) { 
    addIcons({home});
  }

  ngOnInit() {
    // get saved favourites from localstorage
    this.favourites = this.favouritesService.getFavourites();
  }

  // remove movie from list
remove(movieId: number) {
  this.favouritesService.removeFavourite(movieId);

  //refresh list after removal
  this.favourites = this.favouritesService.getFavourites();
}

  // go back home page 
  goHome(){
    this.router.navigate(['home'])
  }
  
}
