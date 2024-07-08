import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private pokemonSvc:PokemonService) { }

  ngOnInit(): void {
    this.pokemonSvc.getAllPokemon()
      .subscribe(resp => {
        console.log(resp);
      })
  }

}
