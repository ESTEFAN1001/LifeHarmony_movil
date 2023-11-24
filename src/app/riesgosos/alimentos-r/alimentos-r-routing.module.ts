import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlimentosRPage } from './alimentos-r.page';

const routes: Routes = [
  {
    path: '',
    component: AlimentosRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlimentosRPageRoutingModule {}
