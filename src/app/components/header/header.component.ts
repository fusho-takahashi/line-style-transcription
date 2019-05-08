import { Component, OnInit } from '@angular/core';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerText: string;
  faArrowLeft = faArrowLeft;

  constructor() {}

  ngOnInit() {
    this.headerText = 'さデラパッション';
  }
}
