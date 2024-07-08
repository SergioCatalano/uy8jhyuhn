import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from '../interfaces/character.interface';

import { LocationApi } from '../interfaces/location.interface';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class CharacterService {

  private url:string= 'https://rickandmortyapi.com/api/character/'
  private location:string='';
  
  constructor(private http: HttpClient) { }

  searchCharacters(query='', page=11 ){
    const filter = `${this.url}/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(filter)
  }

  getDetails( id:number ){   
    return this.http.get<Character>(`${this.url}/${id}`);    
  }


  otherDetails( id: number ){
    this.http.get<Character>(`${this.url}/${id}`)
          .pipe(
            map(resp => this.location = resp.location.url)
          )
          .pipe(map(this.getOneString))
          console.log('hola mundo_')
    return this.http.get<Character>(`${this.url}/${id}`)
  }

  getLocation (direccion:string) {
    // return this.getOneString(location);
    //return this.http.get<LocationApi>(this.direccion)
  }

  getOneString(direccion:string){
    return this.http.get<LocationApi>(`${direccion}`)
  }

  
 

}
