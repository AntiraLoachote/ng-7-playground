import { Route } from '@angular/compiler/src/core';
import { PostService } from './../../service/api/post.service';
import { PostdataModel } from './../../Models/postdata.model';
import { ActivatedRoute, Router } from '@angular/router';
import { GetService } from './../../service/api/get.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {
  id: number;
  data = new PostdataModel();
  constructor(
    private getService: GetService,
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(res => {
      this.id = res['id'];
    });
  }

  ngOnInit() {
    this.getService.getDataById(this.id).subscribe(res => {
      this.data = res;
    });
  }

  update() {
    this.postService.updateData(this.data, this.id).subscribe(res => {
      this.router.navigate(['/home/list']);
    });
  }
}
