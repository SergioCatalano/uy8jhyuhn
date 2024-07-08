import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private _router: Router) { }


  goLogin(){
    this._router.navigate(["auth/login"])
  }

  goForgot(){
    this._router.navigate(["auth/forgot"])
  }

  ngOnInit(): void {
  }

}
