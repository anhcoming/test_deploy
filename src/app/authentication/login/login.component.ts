import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  validateForm!: UntypedFormGroup;

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      role: ['student', [Validators.required]],
      remember: [true],
    });
  }

  login() {
    if (this.validateForm.controls['role'].value == 'student') {
      localStorage.setItem('role', 'student');
      this.router.navigateByUrl('/sv/bang-tin');
      return;
      // this.loginService.role = 'student';
    } else if (this.validateForm.controls['role'].value == 'teacher') {
      localStorage.setItem('role', 'teacher');
      this.router.navigateByUrl('/gv/bang-tin');
      return;
      // this.loginService.role = 'teacher';
    } else if (this.validateForm.controls['role'].value == 'admin')
      localStorage.setItem('role', 'admin');
    this.router.navigateByUrl('/admin/dashboard');
    return;
    // this.loginService.role = 'admin';
  }
}
