import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanAlimentacionPage } from './plan-alimentacion.page';

const routes: Routes = [
  {
    path: '',
    component: PlanAlimentacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanAlimentacionPageRoutingModule {}
