import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackService } from 'src/app/services/snack.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private _router: Router, 
    private _formBuilder: FormBuilder,
    private _snackService: SnackService,
    ) {


    this.formLogin = this._formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  


  //openSnackBar(message: string){
  //  this.snackBar.open(message)
  //}

 

  login(){

    if (this.formLogin.invalid) {
      this._snackService.presentError('Datos Invalidos');
      //this._snackService.showSuccess()
      return;
    }

    let { user , password } = this.formLogin.value;
    this._router.navigate(["dashboard"])
    this._snackService.presentSuccess('Bienvenido galan')
    
  }

  goRegister(){
    this._router.navigate(["auth/registro"])
  }

  goForgot(){
    this._router.navigate(["auth/forgot"])
  }

  ngOnInit(): void {
  }

}
