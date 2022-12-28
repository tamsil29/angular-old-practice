import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FollowersServiceService } from 'src/app/services/followers-service.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers!: any[] | any;
  constructor(private service: FollowersServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(followers => this.followers = followers);
  }


  // openDetails(id: string): void{
  //   this.router.navigate(['details', id]);
  // }

}
