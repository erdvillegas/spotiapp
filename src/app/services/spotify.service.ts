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
      Authorization: 'Bearer BQB3yuA6fIGG7PXZ0g7pgliJScXIsUn1gs4u_S5kHfiDaEagyxJUsCv9RKrO4IhvXMHBpUq5fDtvQMTBf64'
    });

    return this.http.get(url, { headers });

  }
}
