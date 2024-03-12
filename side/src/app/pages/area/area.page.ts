import { Component, OnInit } from '@angular/core';
import { ComidaService } from 'src/app/services/comida.service';
import { Meals, respMeal } from '../../interfaces/common.interfaces';

@Component({
  selector: 'app-area',
  templateUrl: './area.page.html',
  styleUrls: ['./area.page.scss'],
})
export class AreaPage implements OnInit {
  comida: any []=[] ;
  myArea: any []=[] ;
  load=false;


  constructor(
    private _comida:ComidaService
  ) {
    this.viewComidaChina('chinese');
    this.getArea();
  }


  viewComidaChina(area:string){
    this.load=false;
    this._comida.getComidaChina(area).subscribe((data:respMeal)=>{
    if(data.meals){
      this.comida=data.meals;
      console.log(this.comida);
      this.load=true
    }

  });
  }

  getArea(){
    this._comida.getArea().subscribe((resp:any)=>{
      console.log(resp.meals);
      this.myArea=resp.meals
    })
  }

  selectArea(ev:any){
    console.log(ev.detail.value);
    this.viewComidaChina(ev.detail.value)
    }

  ngOnInit() {
  }

}
