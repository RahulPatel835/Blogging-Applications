import { AbstractControl } from "@angular/forms";

export class signupValidators {
  static MustMatch(control: AbstractControl) {
    const password: string | null = control.get("password")?.value;
    const confirmPassword: string | null = control.get("confirmPassword")?.value;
    if (password !== confirmPassword) {
      control.get("confirmPassword").setErrors({ mustMatch: true });
    } else {
      control.get("confirmPassword").setErrors(null);
    }
    return null;
  }
}
