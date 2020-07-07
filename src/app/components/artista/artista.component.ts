import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.route.params.subscribe(
      params => {
        const id: string = params['id'];
        this.getArtista(id);
        this.getTopTracks(id);
      },
      error => console.warn('error', error),
      () => this.loading = false
    );
  }

  getArtista(id: string) {
    this.spotify.getArtista(id).subscribe(
      artista => this.artista = artista,
      error => console.warn('error', error),
      () => this.loading = false
    );
  }

  getTopTracks(id: string) {
    this.loading = true;
    this.spotify.getTopTracks(id).subscribe(
      (top: any[]) => {
        this.topTracks = top;
        console.log(this.topTracks);
      },
      error => console.warn('error', error),
      () => this.loading = false
    );
  }
}
