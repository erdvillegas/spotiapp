import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Log iniciado');
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
    .pipe(map(data => data['albums'].items));

  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => data['artists'].items));
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQD_iTZkGZ1E39v5mSO4Dh7d5XgNDB8r3MCB5kkdydtkm8oXpnYjMgpiC-UGEkGHOGKJAbGhuIHYJtmpSMo'
    });

    return this.http.get(url, { headers });

  }
}