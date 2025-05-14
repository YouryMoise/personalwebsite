import { Component } from '@angular/core';
import { Card } from '../app.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css']
})
export class IotComponent {
cards:Card[] = []
  relevantCards = [
    "System Architecture",
    "River Nodes",
    "Server Node",
    "Central Processing Station",
    "Range vs Packet Success Rate Testing"
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
