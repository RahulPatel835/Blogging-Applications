import { Component, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AuthGuardService } from "../service/auth-guard.service";
import { ProfileService } from "src/app/service/profile.service";
import { UserService } from "src/app/service/user.service";
import { SearchService } from "../service/search.service";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {

  constructor(
    private userService: UserService,
    private profileService: ProfileService,
    private router: Router,
    private authGuardService: AuthGuardService,
    private searchService:SearchService
  ) {}
  loginStatus: Boolean = false;

  public isMenuCollapsed = true;
  searchTerm = '';
  public username:any;
  @Output() onSearch: EventEmitter<any> = new EventEmitter();

  userList = [];

  capitalizaFirstAndLastName(fullName:string) {
    return fullName.toLowerCase().replace(/\b./g, function (a) {
      return a.toUpperCase();
    });
  }

  logout() {
    this.userService.logout();
    this.router.navigate(["login"]);
  }

  ngOnInit() {
    this.userService.loginObservable.subscribe((value) => {
      this.loginStatus = value;
      this.username = this.authGuardService.currentUser;
    });
  }

  redirectToUser($event:any, input:any) {
    let userId = $event.item._id;
    this.profileService.username(userId).subscribe((response: any) => {
      this.router.navigate([`/profile/${response.username}`]);
      input.value = "";
    });
   
  }
  showSearch = false;
  ontoggle(){
    this.showSearch=!this.showSearch;
  }
  search($event: any) {
    this.searchTerm = $event;
    this.searchService.updateSearch(this.searchTerm);
  }


}
