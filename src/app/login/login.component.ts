import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { DataStoreService } from '../Services/data-store/data-store-service/data-store.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class LoginComponent implements OnInit {
  
  formGroup: FormGroup;
  response: boolean = true;
  userFullName: string;
  get controls() { return this.formGroup.controls; }
  constructor(
    private dataStore: DataStoreService,
    private router: Router, ) {
    this.formGroup = this.createFormGroup();
  }
  ngOnInit() {
    this.checkIfLoginHasToken()
  }
  checkIfLoginHasToken() {
    if (this.router.url.includes('login')) {
      var urlArr = this.router.url.split('login');
      var token = urlArr[urlArr.length-1];
      if (token.length != 0&& !token.includes('login')) {
        token = token.substr(1, token.length - 1); // for removing '/' at the beginning
        this.ValidateToken(token);
      }
      else {
        this.redirect()
      }
    }
    else {
      this.redirect()
    }
  }
  redirect() {
     var redirectHost = location.href.includes('login') ? location.href.split('#')[0]+'/%23/login': location.href+'/%23/login';  // To make possible url to form '../../#/login'
    window.location.href = 'http://dev.cogitate.us/SSONew/Login/VerifyCookieToken?siteId=42&redirectURL='+redirectHost ; 
  }

  ValidateToken(token: string) {
    // this.dataStore.ValidateSSOToken(token).subscribe(
    //   (data) => {
    //     console.log(data) //get userId from this api & pass it to AuthenticateUser 
    //   }
    // );
    // localStorage.setItem('producerId','100040')
    this.AuthenticateUser(token);
   //this.AuthenticateUser("c8430ac4-f519-469e-97bd-afe8b5fb18f8");
  }

  AuthenticateUser(userid: string) {
    this.dataStore.authenticate(userid).subscribe(
      data => {
        console.log(data);
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('token', data.token);
        this.router.navigate(['/landingPage']);
      },
      (error) => {
        console.log(error)
        if (error.status == 401) {
          this.response = false;
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
 
}
