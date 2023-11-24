import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlimentosRPageRoutingModule } from './alimentos-r-routing.module';

import { AlimentosRPage } from './alimentos-r.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlimentosRPageRoutingModule
  ],
  declarations: [AlimentosRPage]
})
export class AlimentosRPageModule {}
