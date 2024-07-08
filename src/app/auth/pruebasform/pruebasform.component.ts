import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pruebasform',
  templateUrl: './pruebasform.component.html',
  styleUrls: ['./pruebasform.component.css']
})
export class PruebasformComponent implements OnInit {

  emailCtrl = new FormControl('', [Validators.required])

  constructor() {
    this.emailCtrl.valueChanges
    .subscribe(value => {
      console.log(value)
    })
   }



  ngOnInit(): void {
  }

  getEmail(event: Event) {
    event.preventDefault();
    console.log(this.emailCtrl.value);
    
  }

}
