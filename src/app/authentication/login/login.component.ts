import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: FormControl = new FormControl(undefined, [Validators.required]);
  passWord: FormControl = new FormControl(undefined, [Validators.required]);
  formGroup: FormGroup = new FormGroup({
    'username': this.userName,
    'password': this.passWord
  });
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  public login(): void {
    if (this.formGroup.invalid) {
      this.passWord.markAsTouched();
      this.userName.markAsTouched();
    } else {
      this.localStorageService.set('accessToken', true);
      this.router.navigate(['home']);
    }

  }
}
