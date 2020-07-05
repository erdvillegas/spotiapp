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

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {
    this.route.params.subscribe(params => {
      this.getArtista(params['id']);
    });
  }

  getArtista(id: string) {
    this.spotify.getArtista(id).subscribe( artista => {
      console.log(artista);
      this.artista = artista;
    });
  }
}
