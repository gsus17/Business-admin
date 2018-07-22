import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit {

  @Input() public business;

  constructor() { }

  ngOnInit() {
  }

}
