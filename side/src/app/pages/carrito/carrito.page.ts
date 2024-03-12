import { Component, Input, OnInit } from '@angular/core';
import { Meals } from 'src/app/interfaces/common.interfaces';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  carrito: any[] = [];
  @Input() food!: Meals;

  constructor() { }


  ionViewDidEnter() {
    // Obtener el carrito desde localStorage
    this.carrito = JSON.parse(localStorage.getItem('Carrito') || '[]');

  }

  incrementar(item: any) {
    // Incrementar la cantidad del item en el carrito
    item.cantidad = (item.cantidad || 0) + 1;
    item.total = item.cantidad * this.convertPrice(item.idMeal);
    this.saveCart();
    this.carrito = JSON.parse(localStorage.getItem('Carrito') || '[]');
  }

  decrementar(item: any) {
    // Decrementar la cantidad del item en el carrito, asegurándose de que no sea menos…
    item.cantidad = Math.max((item.cantidad || 0) - 1, 0);
    item.total = item.cantidad * this.convertPrice(item.idMeal);
    this.saveCart();
    this.carrito = JSON.parse(localStorage.getItem('Carrito') || '[]');

  }

  saveCart() {
    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('Carrito', JSON.stringify(this.carrito));
  }
  convertPrice(price: string){
    //convertir, transformar a un numero
    const priceN = (Number(price)/1000);
    return priceN
  }


  eliminarProducto(item: any) {
    // Filtrar el carrito para quitar el producto actual
    this.carrito = this.carrito.filter((foodItem: any) => foodItem !== item);
    this.saveCart();
  }

  ngOnInit() {
  }

}
