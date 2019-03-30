import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from "../../classes/hero";
import { HEROES } from "../../classes/mock-heroes";
import { MessageService } from "../message.service/message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

}
