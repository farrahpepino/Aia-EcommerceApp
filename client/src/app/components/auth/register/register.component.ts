import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { User, UserService } from '../../../services/user.service';
import { v4 as uuidv4 } from 'uuid';
import {RouterLink, Router} from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  }) 

  constructor(private UserService: UserService, private Router: Router){}
  

  handleSubmit(){
    if (!this.registerForm.valid) return;
    const { username, email, password, confirmPassword } = this.registerForm.value;
    if(password != confirmPassword) return; //FIX THIS LATER

    const newUser: User = {
      id: uuidv4(),
      username: username!,
      email: email!,
      password: password!,
    }

    this.UserService.registerUser(newUser).subscribe({
      next: () => {
        this.Router.navigate(['home'], { replaceUrl: true });
      },
      error: (err) => console.error('Registration failed', err),
    });
  }


}
