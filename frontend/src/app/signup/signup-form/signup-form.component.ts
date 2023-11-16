import { Component, Output, EventEmitter, NgModule } from "@angular/core";
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import { FormGroup, FormControl, Validators,ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';

import { signupValidators } from "./signup.validators";
import { UserService } from "src/app/service/user.service";
import { SignupComponent } from "../signup.component";

@Component({
  selector: "signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.css"],
})

export class SignupFormComponent {
  signupError: any = null;

  @Output() idEmitter = new EventEmitter();

  constructor(private userService: UserService) {}

  signupForm = new FormGroup(
    {
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required,Validators.minLength(5),]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(
          "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"
        ),
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl("", [Validators.required]),
    },
    {
      validators: signupValidators.MustMatch,
    }
  );

  signupdata(signupForm:any) {
    if (!this.signupForm.invalid) {
      this.userService.saveUser(signupForm.value).subscribe(
        (res: any) => {
          this.userService.signUpObservable.next(true);
          this.idEmitter.emit(res.data);
        },
        (error) => {
          this.userService.signUpObservable.next(false);
          this.signupError = error["msg"];
        }
      );
    }
  }
}