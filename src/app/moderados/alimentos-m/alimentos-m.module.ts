import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlimentosMPageRoutingModule } from './alimentos-m-routing.module';

import { AlimentosMPage } from './alimentos-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlimentosMPageRoutingModule
  ],
  declarations: [AlimentosMPage]
})
export class AlimentosMPageModule {}
