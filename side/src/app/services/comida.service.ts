import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { respMeal } from '../interfaces/common.interfaces';
const URLAPI='https://www.themealdb.com/api/json/v1/1/';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  constructor(
     private http: HttpClient) { }


     getComida(cat:string){
      return this.http.get<respMeal>(`${URLAPI}filter.php?c=${cat}`);
        }

    getCategories(){
      return this.http.get(`${URLAPI}categories.php`);
    }

    getComidaChina(area:string= 'chinese'){
      return this.http.get<respMeal>(`${URLAPI}filter.php?a=${area}`);
        }

    getArea(){
          return this.http.get(`${URLAPI}list.php?a=list`);
        }

        getIngredientes(ingrediente:string= 'Salmon'){
          return this.http.get<respMeal>(`${URLAPI}filter.php?i=${ingrediente}`);
            }

        getIngredients(){
              return this.http.get(`${URLAPI}list.php?i=list`);
            }

}
