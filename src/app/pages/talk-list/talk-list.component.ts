import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-talk-list',
  templateUrl: './talk-list.component.html',
  styleUrls: ['./talk-list.component.scss'],
})
export class TalkListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  gotoTalk(): void {
    this.router.navigate(['talk']);
  }
}
