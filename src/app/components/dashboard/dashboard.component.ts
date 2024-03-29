import { Component, OnInit } from '@angular/core';

import { Hero } from "../../classes/hero";
import { HeroService } from "../../services/hero.service/hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes:Hero[] = [];

  constructor(private heroService : HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(server_heroes => this.heroes = server_heroes.slice(0, 4));
  }

}
