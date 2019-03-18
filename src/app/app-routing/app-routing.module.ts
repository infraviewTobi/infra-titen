import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { RouterModule, Routes } from '@angular/router'

import { PlayersComponent } from '../players/players.component';

const routes: Routes = [
  {
      path: 'players',
      component: PlayersComponent,
  },
  {
    path: '**',
    redirectTo:'players'
},
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
