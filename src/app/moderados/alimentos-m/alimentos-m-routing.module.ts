import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlimentosMPage } from './alimentos-m.page';

const routes: Routes = [
  {
    path: '',
    component: AlimentosMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlimentosMPageRoutingModule {}
