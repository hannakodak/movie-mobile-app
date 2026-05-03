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

  // remove movie from favourites
  removeFavourite(movieId: number) {
    let favs = this.getFavourites();
    favs = favs.filter(m => m.id !== movieId);
    localStorage.setItem('favourites', JSON.stringify(favs));
  }
}
