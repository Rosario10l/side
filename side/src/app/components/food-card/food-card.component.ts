import { Component, OnInit, Input } from '@angular/core';
import { Meals } from 'src/app/interfaces/common.interfaces';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
})
export class FoodCardComponent  implements OnInit {

  @Input() food!: Meals;

  constructor(
    private _carritoS:CarritoService
  ) { }



  convertPrice(price:string){
    const priceN= (Number(price)/1000)
    return priceN
  }

  addToCart(food:Meals){
 this._carritoS.addToFavorite(food)

   // Obtener el carrito actual desde localStorage
 //  let Carrito = JSON.parse(localStorage.getItem('carrito') || '[]');



   // Agregar el nuevo elemento al carrito
   //Carrito.push(food);

   // Guardar el carrito actualizado en localStorage
   //localStorage.setItem('carrito', JSON.stringify(Carrito));
  }

  /* addToCard(food: any) {
    // Obtener el carrito actual desde localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');


    // Agregar el nuevo elemento al carrito
    carrito.push(food);

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
  } */


  ngOnInit() {}
}
