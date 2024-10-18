import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  formBuilder = inject(FormBuilder);

  loginForm = this.formBuilder.group({
    username: '',
    password: '',
    remember: false
  });

  onSubmit(): void {
    console.log(this.loginForm.value);
  }

}
