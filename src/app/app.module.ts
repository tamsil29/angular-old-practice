import { ErrorHandler } from '@angular/core';
import { PostService } from './services/post.service';
import { FollowersServiceService } from './services/followers-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppErrorHandler } from './common/app-error-handler';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FollowerDetailComponent } from './components/follower-detail/follower-detail.component';
import { PostsComponent } from './components/posts/posts.component';
import { FollowersComponent } from './components/followers/followers.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FollowerDetailComponent,
    PostsComponent,
    FollowersComponent,
    ArchivesComponent,
    ArchiveComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FollowersServiceService,
    PostService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
