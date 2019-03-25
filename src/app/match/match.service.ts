import {Injectable} from '@angular/core';
import {PlayerComponent} from './player/player.component';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  playerOne: PlayerComponent;
  playerTwo: PlayerComponent;

  firstServer: PlayerComponent;

  registerPlayer(player: any) {
    console.log(player);
    if (player.side === 'left') {
      this.playerOne = player;
    } else if (player.side === 'right') {
      this.playerTwo = player;
    }
  }

  /**
   * check if one player has won the game and return the winner
   */
  checkForWin() {
    if (this.playerOne && this.playerTwo) {
      const pointsPlayerOne = this.playerOne.points;
      const pointsPlayerTwo = this.playerTwo.points;
      const sum = (pointsPlayerOne + pointsPlayerTwo);
      if (sum < 12 && sum % 2 !== 0) {
        // no serve change
      } else {
        if (this.playerOne.server) {
          this.playerOne.server = false;
          this.playerTwo.server = true;
        } else {
          this.playerOne.server = true;
          this.playerTwo.server = false;
        }
      }
      if (this.playerOne.points >= 7 && (this.playerOne.points - this.playerTwo.points >= 2)) {
        this.playerOne.won();
        this.playerTwo.lost();
      } else if (this.playerTwo.points >= 7 && (this.playerTwo.points - this.playerOne.points >= 2)) {
        this.playerOne.lost();
        this.playerTwo.won();
      } else {
        console.log("No winner found: playerOne=" + this.playerOne.points + " : playerTwo=" + this.playerTwo.points);
      }
    }

  }

  constructor() {
  }

  umdi(player: any) {
    console.log("Umdi winner:");
    console.log(player);
    if (player == this.playerOne) {
      this.playerTwo.lostUmdi = true;
    } else if (player == this.playerTwo) {
      this.playerOne.lostUmdi = true;
    }
    this.firstServer = player;
  }
}
