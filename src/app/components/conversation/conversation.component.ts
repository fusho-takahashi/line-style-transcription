import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
})
export class ConversationComponent implements OnInit {
  @Input() convText: string;
  @Input() convMem: string;
  constructor() {}

  ngOnInit() {}
}
