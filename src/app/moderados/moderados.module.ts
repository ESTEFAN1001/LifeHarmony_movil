import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModeradosPageRoutingModule } from './moderados-routing.module';

import { ModeradosPage } from './moderados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModeradosPageRoutingModule
  ],
  declarations: [ModeradosPage]
})
export class ModeradosPageModule {}
