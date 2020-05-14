import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CreditService } from 'src/app/service/credit.service';
import { Credit } from 'src/app/model/credit.class';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  //displays all info about actor
  title: string = "Actor-Detail";
  actor: Actor = new Actor();
  actorId: number = 0;
  credits: Credit [] = [];

  constructor(private actorSvc: ActorService,
              private router: Router,
              private route: ActivatedRoute,
              private creditSvc: CreditService) { }

  ngOnInit(): void {
    //get id from the router
    this.route.params.subscribe(parms => this.actorId = parms['id']);
    //get actor for that actorId
    this.actorSvc.get(this.actorId).subscribe(
      jr=> {
        this.actor = jr.data as Actor;
        console.log("Actor found!", this.actor);
    });
    this.creditSvc.getAllMoviesForActor(this.actorId).subscribe(
      jr => {
        this.credits= jr.data as Credit[];
        console.log("Movies by actorID found!", this.credits);
    });
      

  }
  delete(){
    this.actorSvc.delete(this.actorId).subscribe( jr => {
      if(jr.errors==null){
        this.router.navigateByUrl("/actor/list");
      }
      else {
        console.log("*****Error deleting movie.", this.actorId, jr.errors);
      }
    });
  }
}
