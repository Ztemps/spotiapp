import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  searchValue = '';
  constructor(public _spotifyService: SpotifyService) { }

  ngOnInit() {  }

  searchArtists() {

    if ( this.searchValue.length === 0) {
      return;
    }
    this._spotifyService.getArtists(this.searchValue)
        .subscribe();
  }
}
