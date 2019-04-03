import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from "../../classes/hero";
import { HEROES } from "../../classes/mock-heroes";
import { MessageService } from "../message.service/message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    //return of(HEROES);
    return this.http.get<Hero[]>("http://localhost:5000/api/heros");
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);

    // return of(HEROES.find(hero => hero.id === id));
    //this.http.get<Hero>(`http://localhost:5000/api/heros/${id}`).subscribe(data=> console.log("Hero - ", data));
    return this.http.get<Hero>(`http://localhost:5000/api/heros/${id}`);
  }

  updateHero(hero: Hero): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(`http://localhost:5000/api/heros/${hero.id}`, hero, httpOptions);
  }

  addHero(hero_name: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    let hero_obj = {
      name: hero_name,
      power: 'Ice',
    }

    return this.http.post("http://localhost:5000/api/heros", hero_obj, httpOptions);
  }

  deleteHero(hero_id: number): Observable<any> {
    return this.http.delete(`http://localhost:5000/api/heros/${hero_id}`);
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }

    return this.http.get<Hero[]>(`http://localhost:5000/api/heros/search/${term}`);
  }

}
