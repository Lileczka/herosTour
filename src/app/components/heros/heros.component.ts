import { Component } from '@angular/core';
import { Hero, HEROS } from 'src/app/hero.mock';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent {
  heros = HEROS;
  heroName='';
  selectedHero?: Hero;
 
  constructor(){}
  
  
  ngOnInit(): void {}
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
