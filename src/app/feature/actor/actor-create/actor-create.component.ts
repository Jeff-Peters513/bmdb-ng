import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-create',
  templateUrl: './actor-create.component.html',
  styleUrls: ['./actor-create.component.css']
})
export class ActorCreateComponent implements OnInit {
  title: string = "Actor-Create";
  submitBtnTitle: string ="Create";
  
  constructor() { }

  ngOnInit(): void {
  }

}
