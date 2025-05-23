import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Card } from '../app.component';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent {

  cards:Card[] = []
  relevantCards = [
    "Mobile and Sensor Computing - Aquatic Environment Monitoring",
    "Solar Electric Vehicle Team (SEVT)",
    "Nasdaq Software and AI Engineering Intern",
    "eBay Software Engineering Intern",
    "Word Search Solver"
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
