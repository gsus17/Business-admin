import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessServiceService } from '../business-service.service';
import { Business } from '../business.entity';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit {

  /**
   * Business list model.
   * @type {ModelBusinessList}
   * @memberof BusinessListComponent
   */
  public model: ModelBusinessList;

  constructor(
    private router: Router,
    private businessService: BusinessServiceService) { }

  ngOnInit() {
    this.model = {
      businessList: []
    };

    this.getBusinessList();
  }

  /**
   * Edit a business by id.
   * @param {string} businessId
   * @memberof BusinessListComponent
   */
  public editBusiness(businessId: string) {
    console.log(`${BusinessListComponent.name}::editBusiness`);
    this.router.navigate([`business-form`], { queryParams: { id: businessId, edit: true } });
  }

  /**
   * Delete a business by id.
   * @param {string} businessId
   * @memberof BusinessListComponent
   */
  public deleteBusiness(businessId: string) {
    console.log(`${BusinessListComponent.name}::deleteBusiness businessId %o`, businessId);
    this.businessService.deleteBusiness(businessId);
  }

  /**
   * Return all business.
   * @private
   * @memberof BusinessListComponent
   */
  private getBusinessList() {
    console.log(`${BusinessListComponent.name}::getBusinessList`);
    this.businessService.getBusinessList()
      .valueChanges()
      .subscribe((business: Business[]) => {
        this.model.businessList = business;
      });
  }

}

/**
 * Business list model.
 * @export
 * @interface ModelBusinessList
 */
export interface ModelBusinessList {
  businessList: Business[];
}
