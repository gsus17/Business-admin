import { Component, OnInit, Input } from '@angular/core';
import { Business } from '../business.entity';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit {

  @Input() public business: Business;

  constructor() { }

  ngOnInit() {
  }

  public getBusinessImg(): string {
    const businessImg = this.business.img !== '' && this.business.img !== null ? this.business.img : 'assets/images/no-available-image.png';
    return businessImg;
  }

}
