import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  sumar() {
    this.resultado = this.num1 + this.num2;
  }
  restar() {
    this.resultado = this.num1 - this.num2;
  }

  constructor() {}

}
