import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngredientesPageRoutingModule } from './ingredientes-routing.module';

import { IngredientesPage } from './ingredientes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    IngredientesPageRoutingModule
  ],
  declarations: [IngredientesPage]
})
export class IngredientesPageModule {}
