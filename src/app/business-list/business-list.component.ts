import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
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

  /**
   * name
   */
  public goToDetail(businessId: string) {

    this.router.navigate([`business-detail:id`], { queryParams: { id: businessId } });
  }

  private getBusinessList() {
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
