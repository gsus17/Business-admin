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


  public editBusiness(businessId: string) {
    console.log(`${BusinessListComponent.name}::editBusiness`);
    this.router.navigate([`business-form`], { queryParams: { id: businessId, edit: true } });
  }
  public deleteBusiness(businessId: string) {
    console.log(`${BusinessListComponent.name}::deleteBusiness businessId %o`, businessId);
    this.businessService.deleteBusiness(businessId);
  }

  private getBusinessList() {
    console.log(`${BusinessListComponent.name}::getBusinessList`);
    this.businessService.getBusinessList()
      .valueChanges()
      .subscribe((business: Business[]) => {
        this.model.businessList = business;
      });
  }

}


export interface ModelBusinessList {
  businessList: Business[];
}
