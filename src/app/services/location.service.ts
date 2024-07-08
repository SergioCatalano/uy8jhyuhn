import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationApi } from '../interfaces/location.interface';


@Injectable({
  providedIn: 'root'
})


export class LocationService {

  url: string= 'https://rickandmortyapi.com/api/location/4';
  
  constructor(private http:HttpClient) { }

  getOne(){
    return this.http.get<LocationApi>(this.url);
  }

  getOneString(direccion:string){
    return this.http.get<LocationApi>(direccion)
  }

  

}
