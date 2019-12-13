import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from './../Services/api-service.service'
import { error } from '@angular/compiler/src/util';
import { catchError } from 'rxjs/operators';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { of } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  formGroup: FormGroup;
  response: boolean = true;
  rememberme: boolean = false;
  userFullName: string;
  get controls() { return this.formGroup.controls; }
  constructor(
    private api: ApiServiceService,
    private router: Router,
    private location: Location) {
    this.formGroup = this.createFormGroup();
  }
  ngOnInit() {
    console.log(window.location.href );
   this.api.loginRedirect()
   .subscribe(
     data=>{
       console.log(data)
     }
   )
   //window.location.href ='http://dev.cogitate.us/SSONew/Login/VerifyPPCookieToken?siteId=1&redirectURL=';
  }
  submit() {
    event.preventDefault();
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    this.loading = true;
    this.api.signIn(this.controls.email.value, this.controls.password.value)
           .subscribe(
        (data) => {
          this.loading = false;
          if (data.Status == 100) {
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('userFullName', data.ResponseObject.FirstName + ' ' + data.ResponseObject.LastName);
            if (this.rememberme) {
            }
            this.loading = true;
            this.router.navigate(['/landingPage']);
          }
          else {
            this.response = false;
            this.loading = false;
          }
        }
      )

  }
  createFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl('')
    })
  }
  remembermeLogin(): void {
    if (this.rememberme) {
      this.rememberme = false;
    }
    else {
      this.rememberme = true;
    }
  }
}
