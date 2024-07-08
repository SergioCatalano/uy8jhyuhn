import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PruebasformComponent } from './pruebasform/pruebasform.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'forgot', component: ForgotComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'pruebasform', component: PruebasformComponent},
      { path: '**', redirectTo: 'login' }
    ]
  }
]

@NgModule({
  
  imports: [
    RouterModule.forChild( routes )
  ]
})

export class AuthRoutingModule { }
