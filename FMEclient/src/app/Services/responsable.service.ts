import { Injectable } from '@angular/core';
import {Responsable} from "../Model/Responsable";
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {any} from 'codelyzer/util/function';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
  responsableUrl = 'http://localhost:8081/responsable';

  constructor(private http: HttpClient) { }

  getResponsables(): Observable<Responsable[]> {
    // TODO: send the message _after_ fetching the heroes
    return this.http.get<Responsable[]>(this.responsableUrl);
  }


  addResponsable (responsable:Responsable): Observable<Responsable> {
    return this.http.post<Responsable>(this.responsableUrl, Responsable, httpOptions);
  }




}
