import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  year: number | any;
  month: number | any;

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    let params = this.route.snapshot.paramMap;
    this.year = params.get('year');
    this.month = params.get('month');
  }

  viewArchives(){
    this.router.navigate(['/archives'])
  }

}
