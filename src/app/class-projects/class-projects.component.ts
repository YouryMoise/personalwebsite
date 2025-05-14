import { Component } from '@angular/core';
import { Card } from '../app.component';
import { AppService } from '../app.service';


@Component({
  selector: 'app-class-projects',
  templateUrl: './class-projects.component.html',
  styleUrls: ['./class-projects.component.css']
})
export class ClassProjectsComponent {
  cards:Card[] = []
  relevantCards = [
    "Mobile and Sensor Computing - Aquatic Environment Monitoring",
    "Digital Systems Laboratory - BROM Camera and Object Tracking",
    "Digital Systems Laboratory - Video Pipeline",
    "Digital Systems Laboratory - UART Audio",
    "Computation Structures - Operating System Design",
    "Computation Structures - Processor Design",
    "Encoding Culture - Final Project",
    "Fundamentals of Programming - LISP Intepreter",
    "Programming in C and Assembly - ASCII Lab",
    "Fundamentals of Programming - Snekoban Game Solver",
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
