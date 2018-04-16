import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {

  artistList: any[] = [];
  spotifyUrl = 'https://api.spotify.com/v1/';
  spotifyToken = 'BQDC3Sb8N6a_Xr_r5cEanPTeGmSkWs0qxk11Zsu6faagTuQcFV2idjY9a7hCjHbw09U_vivNgBRL8wfditg';
  constructor(public http: HttpClient) {

    console.log('Spotify Service Loaded!');
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'authorization': `Bearer ${this.spotifyToken}`
    });

    return headers;
  }
  getArtists(value: string) {
    const url = `${ this.spotifyUrl }search?query=${value}&type=artist&limit=20`;
    const headers = this.getHeaders();
    // In order to get the results of the get we need to subscribe to it.
    return this.http.get(url, {headers})
                .map( (res: any) => {
                   this.artistList = res.artists.items;
                  return this.artistList;
    });
  }

  getSingleArtist(id: string) {
    const url = `${this.spotifyUrl}artists/${id}`;
    const headers = this.getHeaders();
    // In order to get the results of the get we need to subscribe to it.
    return this.http.get(url, { headers });
  }

  getTopTracks(id: string) {
    const url = `${this.spotifyUrl}artists/${id}/top-tracks?country=ES`;
    const headers = this.getHeaders();
    // In order to get the results of the get we need to subscribe to it.
    return this.http.get(url, { headers });
  }
}
