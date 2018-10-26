import { Component, OnInit } from '@angular/core';
import {Player} from '../Player';
import { PlayerService } from '../player.service';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[];
  player: Player =  {
    id: 1,
    licenseNumber: '1561561',
    firstName: 'Hosni',
    lastName: 'Ammar',
    squadNumber: 9,
    natIdNum: '5',
    adress: '232 Adress',
    phone: '95522236',
    mailAdress: 'hosniammar123@gmail.com',
    height: 1.5,
    weight: 69,
    birthdate: '23/10/1995',
    actualTeamId: 1,
    previousTeamId: 2,
    nationality: 'Tunisian',
    category: 'Category',
    photoUrl: 'https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg'
  };

  constructor(private playerService: PlayerService) { }

  add(
    id: number,
    licenseNumber: string,
    firstName: string,
      lastName: string,
      squadNumber: number,
      natIdNum: string,
      adress: string,
      phone: string,
      mailAdress: string,
      height: number,
      weight: number,
      birthdate: string,
      actualTeamId: number,
      previousTeamId: number,
      nationality: string,
      category: string,
      photoUrl: string): void {
    this.playerService.addPlayer({
      id,
      licenseNumber,
      firstName,
      lastName,
      squadNumber,
      natIdNum,
      adress,
      phone,
      mailAdress,
      height,
      weight,
      birthdate,
      actualTeamId,
      previousTeamId,
      nationality,
      category,
      photoUrl } as Player)
      .subscribe(player => {
        this.players.push(player);
      });
  }
  ngOnInit() {
  }

}
