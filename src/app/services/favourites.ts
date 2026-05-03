import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  
   // get favourites from localStorage
  getFavourites(): any[] {
    return JSON.parse(localStorage.getItem('favourites') || '[]');
  }

  // add movie to favourites
  addFavourite(movie: any) {
    let favs = this.getFavourites();
    favs.push(movie);
    localStorage.setItem('favourites', JSON.stringify(favs));
  }

}
