import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermitidosPage } from './permitidos.page';
import { AlimentosPage } from './alimentos/alimentos.page';

const routes: Routes = [
  {
    path: '',
    component: PermitidosPage
    
  },
  {
    path: 'alimentos/:tipo',
    component: AlimentosPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermitidosPageRoutingModule {}
