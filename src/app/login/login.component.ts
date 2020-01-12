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
   // this.AuthenticateUser("100040");
  }

  AuthenticateUser(userid: string) {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyTmFtZSI6Im56YW1iYW5pIiwiQWdlbnRJZCI6IjQ1OTU3NCIsImp0aSI6IjllZjRiYTFhLTRmYTktNDJjZS1hZjAyLTdkYjM2YzY2Yjg3MiIsImlhdCI6IjEvMTIvMjAyMCA1OjQyOjAxIFBNIiwibmJwcmVtaXVtIjoibmJwcmVtaXVtIiwicmJwcmVtaXVtIjoicmJwcmVtaXVtIiwibG9ibmJwcmVtaXVtIjoibG9ibmJwcmVtaXVtIiwibG9icmJwcmVtaXVtIjoibG9icmJwcmVtaXVtIiwiY2Fycmllcm5icHJlbWl1bSI6ImNhcnJpZXJuYnByZW1pdW0iLCJjYXJyaWVycmJwcmVtaXVtIjoiY2FycmllcnJicHJlbWl1bSIsInBpZiI6InBpZiIsInN1Ym1pc3Npb250b2JvdW5kIjoic3VibWlzc2lvbnRvYm91bmQiLCJtYXJrZXRpbmdsaWJyYXJ5IjoibWFya2V0aW5nbGlicmFyeSIsIm5iZiI6MTU3ODg1MDkyMSwiZXhwIjoxNTc4ODU4MTIxLCJpc3MiOiJodHRwOi8vd3d3LmMtc2hhcnBjb3JuZXIuY29tL21lbWJlcnMvY2F0Y2hlci13b25nIiwiYXVkIjoiQ2F0Y2hlciBXb25nIn0.n2kZ4gLHzsm_TFf9MrjmoAQRyaZMIIaIlMMrxUpo22I');
        this.router.navigate(['/landingPage']);
    // this.dataStore.authenticate(userid).subscribe(
    //   data => {
    //     console.log(data);
    //     localStorage.setItem('loggedIn', 'true');
    //     localStorage.setItem('token', data.token);
    //     this.router.navigate(['/landingPage']);
    //   },
    //   (error) => {
    //     console.log(error)
    //     if (error.status == 401) {
    //       this.response = false;
    //     }
    //   }
    // )
  }
  createFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl('')
    })
  }
 
}
