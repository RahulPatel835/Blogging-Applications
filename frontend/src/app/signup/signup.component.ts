import { Component, NgModule, OnInit, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { SignupFormComponent } from "./signup-form/signup-form.component";
import { UserService } from "../service/user.service";
import { Title } from "@angular/platform-browser";
import { ProfilePhotoFormComponent } from "./profile-photo-form/profile-photo-form.component";
@Component({
  selector: "signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})

export class SignupComponent implements OnInit {
  signUpSuccess: any;

  constructor(private userService: UserService, private titleService: Title) {}

  id:any;

  ngOnInit() {
    this.userService.signUpObservable.subscribe((value) => {
      this.signUpSuccess = value;
    });

    this.titleService.setTitle("Sign Up- Blogging Blogs");
  }

  itemSelected(e:any) {
    this.id = e;
  }
}

