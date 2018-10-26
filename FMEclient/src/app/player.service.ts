import { Injectable } from '@angular/core';
import {Player} from './Player';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {any} from 'codelyzer/util/function';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playersUrl = '//localhost:8080/player';
  constructor(private http: HttpClient) { }
  getPlayers(): Observable<Player[]> {
    // TODO: send the message _after_ fetching the heroes
  return this.http.get<Player[]>(this.playersUrl);
  }

  addPlayer (player: Player): Observable<Player> {
    return this.http.post<Player>(this.playersUrl, player, httpOptions);
  }
}
