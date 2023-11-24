import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlimentosPage } from './alimentos.page';

const routes: Routes = [
  {
    path: '',
    component: AlimentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlimentosPageRoutingModule {}
