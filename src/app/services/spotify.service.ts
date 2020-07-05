import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
    .pipe(map(data => data['albums'].items));

  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => data['artists'].items));
  }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`);
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBja7Rm2KeumMxLal_h4gyVkbAu_9todaeAKU9fAcXhDlOCdedrODAG2OAyk4rNEGAhtQAYl1j8fIeCazU'
    });

    return this.http.get(url, { headers });

  }
}
