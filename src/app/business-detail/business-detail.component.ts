import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessServiceService } from '../business-service.service';
import { Business } from '../business.entity';

@Component({
  selector: 'app-business-detail',
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.css']
})
export class BusinessDetailComponent implements OnInit {

  public model: ModelBusinessDetail;

  constructor(
    private route: ActivatedRoute,
    private businessService: BusinessServiceService) { }

  ngOnInit() {

    this.model = {
      business: null,
      loadData: false,
      // tslint:disable-next-line:radix
      businessId: parseInt(this.route.snapshot.params['id'])
    };

    this.getBusinessDetail();

  }

  private getBusinessDetail() {
    this.businessService.getBusinesById(this.model.businessId)
      .then((business: Business) => {
        this.model.business = business;
        this.model.loadData = true;
      });

  }

  public getBusinessImg(): string {
    // tslint:disable-next-line:max-line-length
    const businessImg = this.model.business != null && this.model.business.img !== '' && this.model.business.img !== null ? this.model.business.img : 'assets/images/no-available-image.png';
    return businessImg;
  }

}


export interface ModelBusinessDetail {
  business: Business;
  businessId: number;
  loadData: boolean;
}
