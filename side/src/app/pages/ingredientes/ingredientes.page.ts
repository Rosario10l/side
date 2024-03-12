import { Component, OnInit } from '@angular/core';
import { respMeal } from 'src/app/interfaces/common.interfaces';
import { ComidaService } from 'src/app/services/comida.service';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.page.html',
  styleUrls: ['./ingredientes.page.scss'],
})
export class IngredientesPage implements OnInit {

  comida: any []=[] ;
  myIngredient: any []=[] ;
  load=false;


  constructor(
    private _comida:ComidaService
  ) {
    this.viewIngrediente('Salmon');
    this.getIngredientes();
  }


  viewIngrediente(ingrediente:string){
    this.load=false;
    this._comida.getIngredientes(ingrediente).subscribe((data:respMeal)=>{
    if(data.meals){
      this.comida=data.meals;
      console.log(this.comida);
      this.load=true
    }

  });
  }

  getIngredientes(){
    this._comida.getIngredients().subscribe((resp:any)=>{
      console.log(resp.meals);
      this.myIngredient=resp.meals
    })
  }

  selectIngredientes(ev:any){
    console.log(ev.detail.value);
    this.viewIngrediente(ev.detail.value)
    }


  ngOnInit() {
  }

}
