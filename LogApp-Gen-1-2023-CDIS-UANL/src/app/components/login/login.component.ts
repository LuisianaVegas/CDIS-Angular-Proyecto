import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formularioLog: FormGroup = this.fb.group({
    id: ['', [Validators.required, Validators.minLength(8)]],
    pass: ['', [Validators.required, Validators.minLength(7)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr:ToastrService)
  {}

  login() {
    /* console.log(this.formularioLog.value);
    console.log(this.formularioLog.valid);
    this.router.navigateByUrl('/dashboard')*/
    if (this.formularioLog.valid) {
      const { id, pass } = this.formularioLog.value;
      this.router.navigateByUrl('/dashboard')
    } else {
      this.toastr.error('Verifique sus datos','Error');
    }
  }
}
