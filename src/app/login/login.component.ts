import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import {} from './../Services/api-service.service'
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
  agentFullName: string;
  get controls() { return this.formGroup.controls; }
  constructor( 
    //private appStore: AppStoreService,
    private router: Router) {
    this.formGroup = this.createFormGroup();

  }

  ngOnInit() {
    let currentUrl = window.location.href;
    let tmpVar = currentUrl.includes('/login');
    if (currentUrl.includes('/login')) {
      window.onpopstate = function (event) {
        history.go(1);
      }
    }
  }

  submit() {
    event.preventDefault();
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    this.loading = true;
    
    //Login API Service call
    // this.appStore.login(this.controls.email.value, this.controls.password.value, this.rememberme).subscribe(
    //   (res) => {
    //     if (res) {
    //       this.agentFullName = res.FirstName + ' ' + res.LastName;
    //       localStorage.setItem('AgentName', this.agentFullName);
    //       localStorage.setItem('UserType',res.UserType.toString());
    //       this.response = true;
    //       if(res.UserType ==1)
    //       {
    //         this.router.navigate(['/charts']);
    //       }
    //       else
    //       {
    //         this.router.navigate(['/charts']);
    //       }

    //     }
    //     this.loading = false;
    //   },(error => {
    //     if (error.status == 401)
    //     {
    //     this.response = false;
    //   }

    //    })
    // );
    if(this.controls.email.value=='cogitate'&&this.controls.password.value=='cogitate'){
      this.router.navigate(['/landingPage']);
    }
    else{
      this.router.navigate(['/login']);
    }
    

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
