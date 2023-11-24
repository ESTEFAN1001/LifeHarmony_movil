import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiesgososPageRoutingModule } from './riesgosos-routing.module';

import { RiesgososPage } from './riesgosos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiesgososPageRoutingModule
  ],
  declarations: [RiesgososPage]
})
export class RiesgososPageModule {}
