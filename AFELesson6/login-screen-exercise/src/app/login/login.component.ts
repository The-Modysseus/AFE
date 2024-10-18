import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { LoginFormComponent } from "../login-form/login-form.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavigationComponent, LoginFormComponent, NavigationComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
