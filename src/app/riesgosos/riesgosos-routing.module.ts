import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiesgososPage } from './riesgosos.page';

const routes: Routes = [
  {
    path: '',
    component: RiesgososPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiesgososPageRoutingModule {}
