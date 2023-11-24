import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModeradosPage } from './moderados.page';
import { AlimentosMPage } from './alimentos-m/alimentos-m.page';

const routes: Routes = [
  {
    path: '',
    component: ModeradosPage
  },
  {
    path: 'alimentos/:tipo',
    component: AlimentosMPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModeradosPageRoutingModule {}
