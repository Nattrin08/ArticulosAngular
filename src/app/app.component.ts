import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'List of favorite animes';

  anime = [
    {
      name: 'Shingeki no Kyojin',
      artist: 'Hajime Isayama',
      type: 'Accion',
      year: 2009
    },
    {
      name: 'Death Note',
      artist: 'Tsugumi Oba',
      type: 'Thriller',
      year: 2003
    },
    {
      name: 'Kimetsu no Yaiba',
      artist: 'Koyoharu Gotoge',
      type: 'Fantasia oscura',
      year: 2016
    }
  ]

  showAnimes(){
    return this.anime.length > 0; 
  }
}
