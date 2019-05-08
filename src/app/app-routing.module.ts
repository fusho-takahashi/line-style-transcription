import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalkListComponent } from './pages/talk-list/talk-list.component';
import { TalkComponent } from './pages/talk/talk.component';

const routes: Routes = [
  { path: '', redirectTo: '/talk-list', pathMatch: 'full' },
  { path: 'talk-list', component: TalkListComponent },
  { path: 'talk', component: TalkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
