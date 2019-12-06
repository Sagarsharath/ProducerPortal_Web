import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from './../Services/api-service.service'
import { error } from '@angular/compiler/src/util';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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
    private router: Router) {
    this.formGroup = this.createFormGroup();
  }
  ngOnInit() {

  }
  submit() {
    event.preventDefault();
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    this.api.signIn(this.controls.email.value, this.controls.password.value)
      .subscribe(
        (data) => {
          this.loading = true;
          // if (data.Status == 100) {
          //   var resObj = data.ResponseObject;
          //   localStorage.setItem('loggedIn', 'true');
          //   localStorage.setItem('userFullName', resObj.FirstName + ' ' + resObj.LastName);
          this.router.navigate(['/landingPage']);
          // }
          // else {
          //   this.response = false;
          //   this.loading = false;
          // }
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