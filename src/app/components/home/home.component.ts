import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Subscriber, Observer } from 'rxjs';
import { Alerta } from '../../models/alerta.model';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Lista de las canciones
  nuevasCanciones: any[] = [];

  loading: boolean;
  alertaActiva: boolean;
  alerta: Alerta = {
    tipo: 'danger',
    titulo: 'Error',
    mensaje: ''
  };

  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.alertaActiva = false;


    this.spotify.getNewReleases().subscribe(
      datos => this.nuevasCanciones = datos,
      error => {
        this.alertaActiva = true;
        this.alerta.titulo = 'Error: ' + error.name;
        this.alerta.mensaje = error.message;
        this.alerta.tipo = 'danger';
        this.loading = false;
      },
      () => this.loading = false
    );
  }

  ngOnInit(): void {
  }

}