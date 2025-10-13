import { Routes } from '@angular/router';
import { Cv } from './components/cv/cv';
import { Proyectos } from './components/proyectos/proyectos';
import { Inicio } from './components/inicio/inicio';

export const routes: Routes = [
{ path: 'home', component: Inicio},
  { path: 'cv', component: Cv},
  { path: 'proyectos', component: Proyectos },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];
