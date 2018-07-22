import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Business } from '../business.entity';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit {

  /**
   * Business.
   * @type {Business}
   * @memberof BusinessCardComponent
   */
  @Input() public business: Business;

  /**
   * Edit event emitter.
   * @memberof BusinessCardComponent
   */
  @Output() editBusinessEmitter = new EventEmitter<string>();

  /**
   * Delete event emitter.
   * @memberof BusinessCardComponent
   */
  @Output() deleteBusinessEmitter = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  /**
   * Return business igm.
   * @returns {string}
   * @memberof BusinessCardComponent
   */
  public getBusinessImg(): string {
    const businessImg = this.business.img !== '' && this.business.img !== null ? this.business.img : 'assets/images/no-available-image.png';
    return businessImg;
  }

  /**
   * Edit a business by id.
   * @param {string} businessId
   * @memberof BusinessCardComponent
   */
  public editBusiness(businessId: string) {
    this.editBusinessEmitter.emit(businessId);
  }

  /**
   * Delete a business by id.
   * @param {string} businessId
   * @memberof BusinessCardComponent
   */
  public deleteBusiness(businessId: string) {
    this.deleteBusinessEmitter.emit(businessId);
  }

}
