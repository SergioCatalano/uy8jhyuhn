import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  {
    path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
 
  {
    path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'pokemonapi',
        loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)
  },
  {
    path: 'dashboard', component: DashboardComponent
  },

  { 
    path: 'character-list', loadChildren: () => import('./characters/character-list/character-list.module').then(m => m.CharacterListModule) 
  },

  { 
    path: 'character-details/:id', loadChildren: () => import('./characters/character-details/character-details.module').then(m => m.CharacterDetailsModule) 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
