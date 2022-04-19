import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class UserService {
  private user: User = null;
  private users: User[] = [];

  constructor(private http: HttpClient,
              private router: Router) {}

  getUser(email: string, password: string) {
    this.http.get<{message: string, users: User[]}>('http://localhost:3000/api/users')
      .subscribe(data => {
        this.users = data.users;
        this.user = this.users.find(
          user => email === user.email
        )
        if(this.user == null || this.user.password !== password) {
          alert("Invalid username or password!");
        } else {
          this.router.navigateByUrl('/crypto');
        }
      }, error => {
        alert("Invalid username or password!" + error.error.errorMessage);
      });
  }

  addUser(newUser: User) {
    this.http.post<{message: string}>('http://localhost:3000/api/users', newUser).pipe()
      .subscribe((res) => {
        alert('Successfully signed up!');
        this.router.navigateByUrl('/crypto');

      }, error => {
        alert('Email exists already!');
        console.log(error);
      });

  }

}
