import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miprimercomponente',
  templateUrl: './miprimercomponente.component.html',
  styleUrls: ['./miprimercomponente.component.css']
})
export class MiprimercomponenteComponent implements OnInit {
  nombre:string;

  constructor() { }

  Mostrar(event){
  	this.nombre = event.target.value;
  }

  Mostrar2(){
  	this.nombre=`Hola! ${this.nombre}`;
  }

  ngOnInit() {
  }

}
