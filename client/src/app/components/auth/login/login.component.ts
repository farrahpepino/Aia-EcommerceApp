import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { User, UserService } from '../../../services/user.service';
import {RouterLink} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private UserService: UserService, private Router: Router){}

  handleSubmit(){
    if (!this.loginForm.valid) return;
    const { username, password } = this.loginForm.value;
    const user: Partial<User> = {
      username: username!,
      password: password!,
    }

    this.UserService.loginUser(user).subscribe({
      next: () => this.Router.navigate(['']),
      error: (err) => console.error('Login failed', err),
    });
  }


}
