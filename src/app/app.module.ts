import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { TalkListComponent } from './pages/talk-list/talk-list.component';
import { TalkComponent } from './pages/talk/talk.component';
import { ConversationComponent } from './components/conversation/conversation.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ListComponent, TalkListComponent, TalkComponent, ConversationComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
