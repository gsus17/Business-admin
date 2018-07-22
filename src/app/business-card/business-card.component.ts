import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Business } from '../business.entity';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit {

  @Input() public business: Business;

  @Output() editBusinessEmitter = new EventEmitter<string>();

  @Output() deleteBusinessEmitter = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  public getBusinessImg(): string {
    const businessImg = this.business.img !== '' && this.business.img !== null ? this.business.img : 'assets/images/no-available-image.png';
    return businessImg;
  }

  public editBusiness(businessId: string) {
    this.editBusinessEmitter.emit(businessId);
  }

  public deleteBusiness(businessId: string) {
    this.deleteBusinessEmitter.emit(businessId);
  }

}
