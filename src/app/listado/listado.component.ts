import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  fakeData = [
    {
      name: 'Sergio',
      lastName: 'Cataldo',
      email: 'correo@random.com',
      startDate: '17/02/2021',
    },
    {
      name: 'Maria',
      lastName: 'Fernandez',
      email: 'otrocorreo@random.com',
      startDate: '12/12/2020',
    },
    {
      name: 'Pepe',
      lastName: 'Gomez',
      email: 'otro@random.com',
      startDate: '10/11/2011',
    },
    {
      name: 'Ermenegildo',
      lastName: 'Lopez',
      email: 'make@random.com',
      startDate: '03/06/1999',
    },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
