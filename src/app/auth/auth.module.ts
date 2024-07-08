import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ForgotComponent } from './forgot/forgot.component';
import { PruebasformComponent } from './pruebasform/pruebasform.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    ForgotComponent,
    PruebasformComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
