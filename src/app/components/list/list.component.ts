import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Output()
  sectionClick = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  gotoSection(): void {
    this.sectionClick.emit('id');
  }
}
