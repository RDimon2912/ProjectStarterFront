import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmailValidators} from '../validators/EmailValidators';
import {AuthService} from '../auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [FormBuilder]
})
export class RegistrationComponent implements OnInit {
  submitted = false;
  newUser = new User();
  formGroup: FormGroup;
  errorMessage: string;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.returnUrl = '/registration/confirm';
    this.formGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.minLength(6), EmailValidators.isValidEmail]],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = null;
    this.authService.register(this.newUser.name, this.newUser.email, this.newUser.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.submitted = false;
          this.errorMessage = error.json().message;
        }
      );
  }

  samePasswords() {
    const password = this.formGroup.get('password').value;
    const confirmPassword = this.formGroup.get('confirmPassword').value;

    if (!password || !confirmPassword) {
      return true;
    }
    return password === confirmPassword;
  }
}
