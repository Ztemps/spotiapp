import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  artist: any = {};
  artistId: any = '';
  headerImage: any = '';
  artistName: any = '';
  trackList: any[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    public _spotifyService: SpotifyService
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .map(param => (this.artistId = param['id']))
      .subscribe((id: any) => {
        this._spotifyService.getSingleArtist(id).subscribe(artist => {
          this.artist = artist;
          console.log('this.artist', this.artist);
          this._spotifyService.getTopTracks(id)
          .map( (res: any) => res.tracks )
          .subscribe( tracks => {
            this.trackList = tracks;
            console.log('this.trackList', this.trackList);
          });
        });
      });
  }
}
