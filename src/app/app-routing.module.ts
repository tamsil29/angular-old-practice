import { NotFoundComponent } from './components/not-found/not-found.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { FollowersComponent } from './components/followers/followers.component';
import { PostsComponent } from './components/posts/posts.component';
import { FollowerDetailComponent } from './components/follower-detail/follower-detail.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'followers',
    component: FollowersComponent
  },
  {
    path: 'details/:id/:avatar_url',
    component: FollowerDetailComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'archives',
    component: ArchivesComponent
  },
  {
    path: 'archive/:year/:month',
    component: ArchiveComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
