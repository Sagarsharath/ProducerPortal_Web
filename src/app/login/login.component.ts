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
      var token = this.router.url.split('login')[1];
      if (token.length != 0) {
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
    const redirectHost = location.origin;
    window.location.href = 'http://dev.cogitate.us/SSONew/Login/VerifyCookieToken?siteId=1&redirectURL='+redirectHost+'/login' ; 
  }

  ValidateToken(token: string) {
    this.dataStore.ValidateSSOToken(token).subscribe(
      (data) => {
        console.log(data) //get userId from this api & pass it to AuthenticateUser 
      }
    );
    this.AuthenticateUser("100040");
  }

  AuthenticateUser(userid: string) {
    this.dataStore.authenticate(userid).subscribe(
      data => {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('token', data.token);
        this.router.navigate(['/landingPage']);
      },
      (error) => {
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
