import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  signIn(form: NgForm) {
    const user = form.value;
    this.userService.getUser(user.email, user.password);
  }

  signUp(form: NgForm) {
    const value = form.value;
    const newUser = {email: value.email, username: value.username, password: value.password, phone: value.phone};
    this.userService.addUser(newUser);
  }

}
