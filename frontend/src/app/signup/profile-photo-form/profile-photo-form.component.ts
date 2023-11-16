import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from "src/app/service/user.service";

@Component({
  selector: "profile-photo-form",
  templateUrl: "./profile-photo-form.component.html",
  styleUrls: ["./profile-photo-form.component.css"],
})
export class ProfilePhotoFormComponent {
  constructor(private userService: UserService, private router: Router) {}

  uploadedFiles:any= Array<File>;

  fileType: Array<String> = ["image/jpeg", "image/jpg", "image/png"];

  uploadFileText: String = "Upload Profile Pic";

  fileUploadColor: String = "accent";

  defaultImgSrc: string = "https://i.stack.imgur.com/X9JD4.png?s=136&g=1";

  @Input() id: any;

  profilePhotoForm = new FormGroup({
    profileImage: new FormControl("", [Validators.required]),
  });

  get profileImage() {
    return this.profilePhotoForm.get("profileImage");
  }

  fileChange(element:any) {
    let filetype = element.target.files[0].type;
    if (this.fileType.indexOf(filetype) >= 0) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.defaultImgSrc = event.target.result;
      };

      reader.readAsDataURL(element.target.files[0]);

      this.uploadedFiles = element.target.files;
      this.uploadFileText = "File Uploaded";
      this.fileUploadColor = "primary";
    } else {
      this.uploadFileText = "Invalid File";
      this.fileUploadColor = "warn";
    }
  }

  uploadFile() {
    const uploadElement = document.getElementById("upload");

if (uploadElement) {
  uploadElement.style.display = "block";
  uploadElement.click();
}

  }

  saveProfilePhoto() {
    let formData = new FormData();
    if (this.uploadedFiles !== undefined) {
      for (var i = 0; i < this.uploadedFiles.length; i++) {
        formData.append(
          "profileImage",
          this.uploadedFiles[i],
          this.uploadedFiles[i].name
        );
      }
      formData.append("userId", this.id);
      this.userService.saveProfilePhoto(formData).subscribe((res) => {
        this.router.navigate(["login"]);
      });
    }
  }

  skipProfilePhoto() {
    this.router.navigate(["login"]);
  }
}
// }
// import { Component, Input } from "@angular/core";
// import { Router } from "@angular/router";

// import { UserService } from "src/app/service/user.service";

// @Component({
//   selector: "profile-photo-form",
//   templateUrl: "./profile-photo-form.component.html",
//   styleUrls: ["./profile-photo-form.component.css"],
// })
// export class ProfilePhotoFormComponent {
//   constructor(private userService: UserService, private router: Router) {}

//   uploadedFile: File | undefined;

//   fileType: string[] = ["image/jpeg", "image/jpg", "image/png"];

//   uploadFileText: string = "Upload Profile Pic";

//   fileUploadColor: string = "accent";

//   defaultImgSrc: string = "https://i.stack.imgur.com/X9JD4.png?s=136&g=1";

//   @Input() id: any;

//   fileChange(event: any) {
//     const file: File = event.target.files[0];
//     if (file && this.fileType.indexOf(file.type) >= 0) {
//       this.uploadedFile = file;
//       const reader = new FileReader();
//       reader.onload = (event: any) => {
//         this.defaultImgSrc = event.target.result;
//       };
//       reader.readAsDataURL(file);
//       this.uploadFileText = "File Uploaded";
//       this.fileUploadColor = "primary";
//     } else {
//       this.uploadFileText = "Invalid File";
//       this.fileUploadColor = "warn";
//     }
//   }

//   uploadFile() {
//     const uploadElement = document.getElementById("upload") as HTMLInputElement;
//     if (uploadElement) {
//       uploadElement.style.display = "block";
//       uploadElement.click();
//     }
//   }

//   saveProfilePhoto() {
//     if (this.uploadedFile) {
//       const formData = new FormData();
//       formData.append("profileImage", this.uploadedFile, this.uploadedFile.name);
//       formData.append("userId", this.id);
//       this.userService.saveProfilePhoto(formData).subscribe((res) => {
//         this.router.navigate(["login"]);
//       });
//     }
//   }

//   skipProfilePhoto() {
//     this.router.navigate(["login"]);
//   }
// }
