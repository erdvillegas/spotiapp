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
  loading: boolean;

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.route.params.subscribe(
      params => this.getArtista(params['id']),
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
}
