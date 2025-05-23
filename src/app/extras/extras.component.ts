import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Card } from '../app.component';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent {
  cards:Card[] = []
  relevantCards = [
    "Solar Electric Vehicle Team (SEVT)",
    "MacLea",
    // "Robotic Head - AttentivU Project", leave out for now in case Natliya doesn't want it known
    "Arcturus (Autonomous Robotics Team)"
  ]
  constructor(
    private appService:AppService
  ){
    this.appService.getCards(this.relevantCards).subscribe(cardList=>this.cards = cardList);
  }

  ngOnInit():void{
    console.log(this.cards);
  }
}
