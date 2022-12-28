import { FollowersServiceService } from './../../services/followers-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-follower-detail',
  templateUrl: './follower-detail.component.html',
  styleUrls: ['./follower-detail.component.css']
})
export class FollowerDetailComponent implements OnInit {
  id: number | any
  avatar_url: string | any

  constructor(
    private service: FollowersServiceService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    let params = this.activatedRoute.snapshot.paramMap
    this.id = params.get("id")
    this.avatar_url = params.get("avatar_url")
  }
}
