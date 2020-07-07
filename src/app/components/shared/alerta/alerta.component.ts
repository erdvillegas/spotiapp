import { Component, OnInit, Input } from '@angular/core';
import { Alerta } from '../../../models/alerta.model';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html'
})
export class AlertaComponent implements OnInit {

  @Input() alerta: Alerta;

  constructor() { }

  ngOnInit(): void {
  }

}
