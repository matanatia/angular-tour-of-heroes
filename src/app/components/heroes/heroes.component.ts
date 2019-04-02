import { Component, OnInit } from '@angular/core';
import { Hero } from "../../classes/hero";
import { HeroService } from "../../services/hero.service/hero.service";
import { MessageService } from "../../services/message.service/message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes:Hero[];

  constructor(private heroService: HeroService, private messageService : MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes():void {

    this.heroService.getHeroes()
    .subscribe(server_heroes => this.heroes = server_heroes);
    
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero(name)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

}
