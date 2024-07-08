import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProductComponent } from './product/product.component';
import { ViewComponent } from './view/view.component';
import { CharactersModule } from '../characters/characters.module';


@NgModule({
  declarations: [
    ProductComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    CharactersModule
  ]
})
export class ProductsModule { }
