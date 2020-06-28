import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Log iniciado');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDrXWF-wEt6Ecl1B0yYyHvbO7SJr9jXT4AO1dv_i8DFFy-Ym4hO4FQBs-u_-zgICKLYLQ3a-nbIjGI1qZg'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?offset=5', { headers });
  }

  getArtista(termino: string){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDrXWF-wEt6Ecl1B0yYyHvbO7SJr9jXT4AO1dv_i8DFFy-Ym4hO4FQBs-u_-zgICKLYLQ3a-nbIjGI1qZg'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers });
  }
}