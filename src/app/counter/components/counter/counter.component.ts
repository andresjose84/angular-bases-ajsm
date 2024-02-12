import { Component } from "@angular/core";

@Component( {
  selector: 'app-counter',
  template: `
  <h1>Hola Counter</h1>
  <h3>
    Counter : {{counter}}
  </h3>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="decreaseBy(1)">-1</button>
  <button (click)="defaultBy(10)">Resete</button>
  `
} )
export class counterComponent {
  public counter: number = 10;

  public increaseBy ( value: number ): void {
    this.counter += value;
  }

  public decreaseBy ( value: number ): void {
    this.counter -= value;
  }

  public defaultBy ( value: number ): void {
    this.counter = value;
  }
}
