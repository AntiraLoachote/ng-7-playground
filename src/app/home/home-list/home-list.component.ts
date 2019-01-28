import { PostdataModel } from 'src/app/Models/postdata.model';
import { GetService } from './../../service/api/get.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {
  dataList = new Array<PostdataModel>();
  constructor(private getService: GetService) { }

  ngOnInit() {
    this.getService.getData().subscribe(res => {
      console.log(res);
      this.dataList = res;
    });
  }

}
