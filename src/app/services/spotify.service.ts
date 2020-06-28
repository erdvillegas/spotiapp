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
      Authorization: 'Bearer BQBaLdJYLjtNShQ8STh-7-TlO9ey8emC96xyzm8LvwumrHHC5O1mm9AIgI-7eVwwL3uNlhmegU50N2ITulg'
    });

    return this.http.get(url, { headers });

  }
}