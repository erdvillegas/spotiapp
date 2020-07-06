import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Subscriber, Observer } from 'rxjs';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Lista de las canciones
  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {

    this.loading = true;

    this.spotify.getNewReleases().subscribe(
      datos => this.nuevasCanciones = datos,
      error => console.warn('error', error),
      () => this.loading = false
    );
  }

  ngOnInit(): void {
  }

}