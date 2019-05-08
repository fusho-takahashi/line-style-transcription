import { Component, OnInit } from '@angular/core';
import { conversation } from '../../data/20190507-1';
@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss'],
})
export class TalkComponent implements OnInit {
  conversation;
  constructor() {
    this.conversation = conversation;
  }

  ngOnInit() {}
}
