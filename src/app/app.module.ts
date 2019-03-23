import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {PlayersComponent} from './players/players.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {OverviewComponent} from './overview/overview.component';
import {MatButtonModule, MatToolbarModule} from "@angular/material";
import { StatisticsComponent } from './statistics/statistics.component';
import { EditplayerComponent } from './editplayer/editplayer.component';
import { NewtournamentComponent } from './newtournament/newtournament.component';
import { TournamentComponent } from './tournament/tournament.component';
import { MatchComponent } from './match/match.component';
import { PlayerComponent } from './match/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    OverviewComponent,
    StatisticsComponent,
    EditplayerComponent,
    NewtournamentComponent,
    TournamentComponent,
    MatchComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
