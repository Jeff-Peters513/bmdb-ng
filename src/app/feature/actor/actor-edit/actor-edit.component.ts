import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
  title: string = "Actor-Edit";
  submitBtnTitle: string ="Edit";

  constructor() { }

  ngOnInit(): void {
  }

}
