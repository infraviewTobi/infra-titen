import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  //TODO get player from url
 playerOne:string='Enrico';
 playerTwo:string='Tobo';

  constructor() { }

  ngOnInit() {
  }

}
