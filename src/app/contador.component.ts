import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

   <h1>{{ titulo }}</h1>

<button (click)= "acumular(+2)"></button>

<span>{{numero}}</span>

<button (click)= "acumular(-2) "></button>`




})

export class ContadorComponent{

    titulo: string  = 'Contador app';
  numero: number = 10;

  acumular(valor:number){
    this.numero += valor;
  }

}