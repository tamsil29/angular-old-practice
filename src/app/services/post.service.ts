import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url= 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.url)
    .pipe(map(response => response));
  }

  createPost(post: any){
    // return throwError(new AppError())

    return this.http.post(this.url, JSON.stringify(post))
    .pipe(map(response => response))
    .pipe(catchError(this.handleError))
  }

  updatePost(post: any){
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ "title": "baklol" }))
    .pipe(catchError(this.handleError))
  }

  deletePost(id: any){
    // return throwError(new AppError())

    return this.http.delete(this.url + '/' + id)
    .pipe(catchError(this.handleError))
  }

  private handleError(error: any){
    if (error.status === 400){
      return throwError(new BadInput(error.json()))
    }
    if (error.status === 404){
      return throwError(new NotFoundError())
    }
    return throwError(new AppError(error))
  }
}

