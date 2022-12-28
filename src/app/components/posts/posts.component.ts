import { BadInput } from './../../common/bad-input';
import { NotFoundError } from './../../common/not-found-error';
import { AppError } from './../../common/app-error';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] | any

  constructor(private service: PostService) {
  }

  ngOnInit(): void {
    this.service.getPosts()
    .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement){
    let post:any = {title: input.value}
    this.posts.splice(0, 0, post)

    input.value = '';

    this.service.createPost(post)
    .subscribe(
      response => {
      post['id'] = response
    },
      (error:AppError) => {
        this.posts.splice(0, 1)
        if(error instanceof BadInput){
          // this.form.setErrors(error.originalError)
        }
        else throw error;
    })
  }

  updatePost(post: any){
    this.service.updatePost(post)
    .subscribe(
      response => {
      console.log(response)
    })
  }

  deletePost(post: any){
    let index = this.posts.indexOf(post)
    this.posts.splice(index, 1)

    this.service.deletePost(post.id)
    .subscribe(
      () => {
        null
    },
      (error:AppError) => {
        this.posts.splice(index, 0, post)

        if (error instanceof NotFoundError){
          alert("the post has already been deleted")
        }
        else throw error
    })
  }


}
