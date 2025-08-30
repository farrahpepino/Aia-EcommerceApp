import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { UserService } from '../../../services/user.service';
import {RouterLink, Router} from '@angular/router';
import { User } from '../../../models/UserModel';

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
      next: (data) => {
        this.UserService.setUser(data.token);
        this.Router.navigate(['home'], { replaceUrl: true });
      },
      error: (err) => console.error('Login failed', err),
    });
  }


}
