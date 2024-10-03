import { Component, Input, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-counter',
  templateUrl: './people-counter.component.html',
  styleUrls: ['./people-counter.component.scss'],
})
export class PeopleCounterComponent  implements OnInit {

  @Input() number:string = "";
  constructor() { }

  ngOnInit() {}

}
