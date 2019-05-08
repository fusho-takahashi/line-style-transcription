import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  headerTitle: string;

  setTitle(title: string): void {
    console.log('-------');

    this.headerTitle = title;
  }

  onActivate(componentRef: any): void {
    console.log(componentRef);
    this.headerTitle = componentRef.title;
  }
}
