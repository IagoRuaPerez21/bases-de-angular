import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Heimerdinger';
  public age: number = 200;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} tiene ${this.age} años.`;
  }

  changeName():void{
    this.name = "Alistar";
  }

  changeAge():void{
    this.age = 56;
  }

}
