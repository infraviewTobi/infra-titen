import { Component, OnInit } from '@angular/core';

interface Player{
  name:string;
  id:number;
}

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players:Player[]=[{name:"Alex",id:0},{name:"Tobi",id:1},{name:"Matthias",id:2},{name:"Eric",id:3}];

  constructor() { }

 
  ngOnInit() {
  }


  editPlayer(id: number) {

  }
}
