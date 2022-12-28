import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FollowersServiceService {
  url= "https://api.github.com/users/mosh-hamedani/followers";
  constructor(private http: HttpClient) { }
  
  getAll(){
    return this.http.get(this.url)
  }

  getSingleUser(id: string){
    return this.http.get(this.url)
  }
}
