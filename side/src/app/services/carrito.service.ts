import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  misFavoritos: any[] = [];

  constructor() {
    this.cargarFavoritos();
  }

  buscarEnFavoritos(movie: any) {
    const encontrado = !!this.misFavoritos.find((peli) => peli.id === movie.idMeal);
    return encontrado;
  }

  addToFavorite(movie: any) {
    console.log(movie);

    const encontrado = this.misFavoritos.find((peli) => peli.idMeal === movie.idMeal);

    if (encontrado) {
      const newFood = {
        ...encontrado,
        cantidad: encontrado.cantidad + 1,
        total: encontrado.total + (encontrado.idMeal / 1000),
      };
      const index = this.misFavoritos.findIndex(
        (peli) => peli.idMeal === movie.idMeal
      );
      this.misFavoritos[index] = newFood;
      localStorage.setItem('Carrito', JSON.stringify(this.misFavoritos));
      return;
    }

    const newFood = {
      ...movie,
      cantidad: 1,
      total: movie.idMeal / 1000,
    };
    this.misFavoritos.push(newFood);
    localStorage.setItem('Carrito', JSON.stringify(this.misFavoritos));
  }

  async cargarFavoritos() {
    this.misFavoritos = await JSON.parse(
      localStorage.getItem('Carrito') || '[]'
    ) || [];
  }

  get favoritos() {
    return [...this.misFavoritos];
  }

 
}
