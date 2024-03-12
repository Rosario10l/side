import { Component, OnInit } from '@angular/core';
import { Meals, respMeal } from 'src/app/interfaces/common.interfaces';
import { ComidaService } from 'src/app/services/comida.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  imgUrl='https://image.tmdb.org/t/p/w500'
  comida: Meals []=[] ;
  myCategories: any []=[] ;

  constructor(
    private _comida:ComidaService
  ) {
    this.viewComida('Beef');
    this.getCategories();

  }

  viewComida(cat:string){
    this._comida.getComida(cat).subscribe((data:respMeal)=>{
this.comida=data.meals;
console.log(this.comida);
  });
  }

  getCategories(){
    this._comida.getCategories().subscribe((resp:any)=>{
      console.log(resp.categories);
      this.myCategories=resp.categories
    })
  }
selectCategory(ev:any){
console.log(ev.detail.value);
this.viewComida(ev.detail.value)
}
  ngOnInit() {
  }

}
