import {Component, OnInit, Input} from '@angular/core';
import {MatchService} from '../match.service';

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
  public errors = 0;
  win: boolean;
  lose: boolean;
  matchService: MatchService;
  wonUmdi: boolean = false;
  lostUmdi: boolean = false;
  server: boolean = false;

  constructor(matchService: MatchService
  ) {
    this.matchService = matchService;
  }

  ngOnInit() {
    this.matchService.registerPlayer(this);
  }

  umdi() {
    this.wonUmdi = true;
    this.server = true;
    this.matchService.umdi(this);
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

  error() {
    this.errors++;
    this.matchService.pointForOpponent(this);
  }


}
