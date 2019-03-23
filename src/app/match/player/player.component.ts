import { Component, OnInit, Input } from '@angular/core';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() public name: string;
  @Input() public side: string;
  public points = 0;
  public smashes = 0;
  public aces = 0;
  public flukes = 0;
  win: boolean;
  lose: boolean;
  matchService: MatchService;

  constructor(matchService: MatchService
  ) {
    this.matchService = matchService;
  }

  ngOnInit() {
    this.matchService.registerPlayer(this);
  }

  score() {
    this.points++;
    this.matchService.checkForWin();
  }

  smash() {
    this.smashes++;
    this.score();
  }

  ace() {
    this.aces++;
    this.score();
  }

  fluke() {
    this.flukes++;
    this.score();
  }

  won() {
    this.win = true;
    console.log('Player ' + this.name + ' won');
  }

  lost() {
    this.lose = true;
    console.log('Player ' + this.name + ' lost');
  }

}