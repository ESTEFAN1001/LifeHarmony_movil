import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'permitidos',
    loadChildren: () => import('./permitidos/permitidos.module').then( m => m.PermitidosPageModule)
  },
  {
    path: 'moderados',
    loadChildren: () => import('./moderados/moderados.module').then( m => m.ModeradosPageModule)
  },
  {
    path: 'riesgosos',
    loadChildren: () => import('./riesgosos/riesgosos.module').then( m => m.RiesgososPageModule)
  },
  {
    path: 'plan-alimentacion',
    loadChildren: () => import('./plan-alimentacion/plan-alimentacion.module').then( m => m.PlanAlimentacionPageModule)
  },
  {
    path: 'alimentos',
    loadChildren: () => import('./permitidos/alimentos/alimentos.module').then( m => m.AlimentosPageModule)
  },
  {
    path: 'alimentos-m',
    loadChildren: () => import('./moderados/alimentos-m/alimentos-m.module').then( m => m.AlimentosMPageModule)
  },
  {
    path: 'alimentos-r',
    loadChildren: () => import('./riesgosos/alimentos-r/alimentos-r.module').then( m => m.AlimentosRPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
