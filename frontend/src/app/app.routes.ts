import { Routes } from '@angular/router';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { ProgramsComponent } from './dashboard/pages/programs/programs.component';
import { PagesComponent } from './dashboard/pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeAdminComponent } from './dashboard/admin/pages/home-admin/home-admin.component';
import { LoginComponent } from './auth/login/login.component';
import { DetailsProgramsComponent } from './dashboard/pages/details-programs/details-programs.component';

export const routes: Routes = [
  {//RAÍZ
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'',
    component: DashboardComponent,
    children: [
      {// RUTAS PUBLICAS
        path: '',
        component: PagesComponent,
        children: [
          {
            path: 'home',
            component: HomeComponent
          },
          {
            path: 'details',
            component: DetailsProgramsComponent
          },
          {
            path: 'programs',
            component: ProgramsComponent
          }
        ]
      },
      {// RUTAS DE ADMINISTRACIÓN
        path: 'admin',
        component: HomeAdminComponent
      }
    ]
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'programs/login',
    component: LoginComponent
  },
  {//NO EXISTE LA RUTA
    path: '**',
    redirectTo: '/home'
  }

  
];
