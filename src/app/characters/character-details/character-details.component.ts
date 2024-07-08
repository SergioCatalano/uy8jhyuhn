import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from '../../interfaces/character.interface';
import { Location } from '@angular/common';
import { take } from 'rxjs/operators';
import { LocationService } from 'src/app/services/location.service';
import { LocationApi } from '../../interfaces/location.interface';



@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  character$: Observable<Character> | undefined;
  location$: Observable<LocationApi>  | undefined;

  

  constructor(

    private route:ActivatedRoute, 
    private characterSvc:CharacterService, 
    private location:Location,
    private locationSvc: LocationService
    ) { }

  ngOnInit() {
    
    this.route.params.pipe(take(1)).subscribe((params) =>{
      const id= params['id'];
      this.character$ = this.characterSvc.otherDetails(id);
      //this.location3 = this.characterSvc.getLocation();

      //this.character$.subscribe(i => {
      //  this.dire = i.location.url;
     //   console.log(this.dire, 'intento1') 
     // })
     
      console.log(params,'intento2')
      console.log(id);
     // this.location$ = this.locationSvc.getOneString(this.dire).subscribe( resp => {
     //   this.location2=resp;
     // })
      
      //this.location$ = this.locationSvc.getOne().subscribe( resp =>{
        //this.location2= resp;
       // console.log(this.location2.name);
        
     // })   
    });
    
  }
  goLocation(){
    const doc = document.getElementById('loc')
    console.log(doc)
    this.location$ = this.locationSvc.getOne()
  }

  onGoBack(): void {
    this.location.back();
    //window.history.back();
  }


}
