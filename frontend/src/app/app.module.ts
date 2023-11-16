import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA} from '@angular/core';
import {  RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { HttpModule } from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import {MatExpansionModule} from '@angular/material/expansion'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatDialogModule } from '@angular/material/dialog'
import { MatTableModule } from '@angular/material/table'
// import { MomentModule } from 'angular2-moment'
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { MainCarousalComponent } from './carousal/main-carousal/main-carousal.component'
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { HomeComponent } from './home/home.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { ViewPostComponent } from './posts/view-post/view-post.component'
import { ViewAllPostsComponent } from './posts/view-all-posts/view-all-posts.component'
import { ProfileComponent } from './profile/profile.component';
import { DeleteCommentDialogBoxComponent } from './dialog-box/delete-comment-dialog-box/delete-comment-dialog-box.component';
import { SignupFormComponent } from './signup/signup-form/signup-form.component';
import { ProfilePhotoFormComponent } from './signup/profile-photo-form/profile-photo-form.component';
import { MainComponent } from './main/main.component';
import { PostComponent } from './posts/post/post.component';
import { ErrorIntercept } from './error.interceptor';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
// import { FollowerListComponent } from './profile/follower-list/follower-list.component';
import { FreeblogComponent } from './freeblog/freeblog.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { PaginationComponent } from './pagination/pagination.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		MainCarousalComponent,
		LoginComponent,
		SignupComponent,
		HomeComponent,
		SidebarComponent,
		ViewPostComponent,
		ViewAllPostsComponent,
		ProfileComponent,
		DeleteCommentDialogBoxComponent,
		SignupFormComponent,
		ProfilePhotoFormComponent,
		MainComponent,
		PostComponent,
		EditProfileComponent,
   		FreeblogComponent,
  		PaginationComponent,
        BlogComponent      
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		FormsModule,
		AppRoutingModule,
		RouterModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatCheckboxModule,
		MatSnackBarModule,
		MatTooltipModule,
		InfiniteScrollModule,
		MatExpansionModule,
		MatDialogModule,
		MatTableModule,
		NgbTypeaheadModule,
		MatListModule,
	    AngularSvgIconModule
	],exports:[],
	providers: [
		HomeComponent,
		BlogComponent,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorIntercept,
			multi: true
		}
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
	bootstrap: [AppComponent],
	// entryComponents: [
	// 	DeleteCommentDialogBoxComponent
	// ]
})
export class AppModule { }
