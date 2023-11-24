import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { PlanAlimentacionPageRoutingModule } from './plan-alimentacion-routing.module';

import { PlanAlimentacionPage } from './plan-alimentacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanAlimentacionPageRoutingModule
  ],
  declarations: [PlanAlimentacionPage]
})
export class PlanAlimentacionPageModule {}
