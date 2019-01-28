import { PostdataModel } from './../../Models/postdata.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-home-shared',
  templateUrl: './home-shared.component.html',
  styleUrls: ['./home-shared.component.scss']
})
export class HomeSharedComponent implements OnInit {
  postData = new PostdataModel();
  constructor() { }
  @Input()
  set defaultModel(value) {
    this.postData = value;
  }
  @Output() save = new EventEmitter();
  ngOnInit() {
  }

}
