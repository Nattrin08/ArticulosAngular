import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-listado-articulos',
  templateUrl: './listado-articulos.component.html',
  styleUrls: ['./listado-articulos.component.scss']
})
export class ListadoArticulosComponent {
  //favorito es una variable que es espera recibir datos tipo array del padre(app.component.ts)
  @Input() favorito!: any[];
  constructor() { }

}
