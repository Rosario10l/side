import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Ingredientes ', url: '/ingredientes', icon: 'mail' },
    { title: 'Categorias', url: '/categorias', icon: 'paper-plane' },
    { title: 'Area', url: '/area', icon: 'heart' },
    { title: 'Carrito', url: '/carrito', icon: 'cart' },

  ];
  constructor() {}
}
