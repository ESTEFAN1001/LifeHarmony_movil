import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermitidosPageRoutingModule } from './permitidos-routing.module';

import { PermitidosPage } from './permitidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PermitidosPageRoutingModule
  ],
  declarations: [PermitidosPage]
})
export class PermitidosPageModule {}
