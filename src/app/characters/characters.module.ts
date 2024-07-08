import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';

const myComponents = [CharacterDetailsComponent, CharacterListComponent];

@NgModule({
  declarations: [ ...myComponents],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ ...myComponents]
  //con split operator? para insertar/injectar el array//
})
export class CharactersModule { }
