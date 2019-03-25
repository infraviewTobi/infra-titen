import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import {PlayersComponent} from '../players/players.component';
import {OverviewComponent} from "../overview/overview.component";
import {StatisticsComponent} from "../statistics/statistics.component";
import {EditplayerComponent} from "../editplayer/editplayer.component";
import {NewtournamentComponent} from "../newtournament/newtournament.component";
import {TournamentComponent} from "../tournament/tournament.component";
import {MatchComponent} from "../match/match.component";

const routes: Routes = [
  {
    path: 'players',
    component: PlayersComponent,
  },
  {
    path: 'overview',
    component: OverviewComponent,
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
  },
  {
    path: 'editplayer',
    component: EditplayerComponent,
  },
  {
    path: 'newtournament',
    component: NewtournamentComponent,
  },
  {
    path: 'tournament',
    component: TournamentComponent,
  },
  {
    path: 'match',
    component: MatchComponent,
  },
  {
    path: '**',
    redirectTo: 'overview'
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
export class AppRoutingModule {
}
