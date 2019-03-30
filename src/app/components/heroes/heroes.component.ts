import { Component, OnInit } from '@angular/core';
import { Hero } from "../../classes/hero";
import { HeroService } from "../../services/hero.service/hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes:Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(server_heroes => this.heroes = server_heroes);
  }

  onSelect(hero:Hero, e:Event):void {
    this.selectedHero = hero;
  }

}
