import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {newArray} from "@angular/compiler/src/util";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: User[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.users.push(new User("Yasahan"));
  }

  addUser(registerForm) {
    console.log(registerForm)
    this.users.push(new User(registerForm.value.userName))
    registerForm.reset();
  }


}
