import { PostdataModel } from './../../Models/postdata.model';
import { PostService } from './../../service/api/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-create',
  templateUrl: './home-create.component.html',
  styleUrls: ['./home-create.component.scss']
})
export class HomeCreateComponent implements OnInit {
  data = new PostdataModel();
  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
  }

  postData(): void {
    // mock
    console.log(this.data);
    this.postService.postData(this.data).subscribe(res => {console.log(res)});
  }
}
