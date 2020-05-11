import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  title: string = "Actor-List";

  //actors will hold our list of actors from our backend
  //will be one way bound on our HTML to provide a table of actors
  actors: Actor[] = [];

  constructor(private actorSvc: ActorService) { }

  ngOnInit(): void {
    //call our actor service to populate the list of actors
    
  }

}
