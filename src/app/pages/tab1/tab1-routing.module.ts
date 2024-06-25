import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Tab1Page } from './tab1.page';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children : [
      {
        path: 'apirest',
        loadChildren: () => import('./../../pages/apirest/apirest.module').then( m => m.ApirestPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./../../pages/perfil/perfil.module').then( m => m.PerfilPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'busqueda',
        loadChildren: () => import('./../../pages/busqueda/busqueda.module').then( m => m.BusquedaPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./../../pages/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'registro',
        loadChildren: () => import('./../../pages/registro/registro.module').then( m => m.RegistroPageModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
