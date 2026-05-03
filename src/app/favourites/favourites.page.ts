import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,  IonButton} from '@ionic/angular/standalone';
import { FavouritesService } from '../services/favourites';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,  IonButton]
})
export class FavouritesPage implements OnInit {
  favourites: any[] = [];

  constructor(private favouritesService: FavouritesService) { }

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
}
