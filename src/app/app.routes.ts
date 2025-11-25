import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'senhas',
    loadComponent: () => import('./senhas/senhas.page').then( m => m.SenhasPage)
  },
  {
    path: 'golpes',
    loadComponent: () => import('./golpes/golpes.page').then( m => m.GolpesPage)
  },
  {
    path: 'privacidade',
    loadComponent: () => import('./privacidade/privacidade.page').then( m => m.PrivacidadePage)
  },
  {
    path: 'game',
    loadComponent: () => import('./game/game.page').then( m => m.GamePage)
  },

];
