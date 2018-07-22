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

  /**
   * Business detail model view.
   * @type {ModelBusinessDetail}
   * @memberof BusinessDetailComponent
   */
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

  /**
   * Return business detail.
   * @private
   * @memberof BusinessDetailComponent
   */
  private getBusinessDetail() {
    this.businessService.getBusinesById(this.model.businessId)
      .then((business: Business) => {
        this.model.business = business;
        this.model.loadData = true;
      });
  }

  /**
   * Return business img.
   * @returns {string}
   * @memberof BusinessDetailComponent
   */
  public getBusinessImg(): string {
    // tslint:disable-next-line:max-line-length
    const businessImg = this.model.business != null && this.model.business.img !== '' && this.model.business.img !== null ? this.model.business.img : 'assets/images/no-available-image.png';
    return businessImg;
  }

}

/**
 * Business detail model.
 * @export
 * @interface ModelBusinessDetail
 */
export interface ModelBusinessDetail {
  business: Business;
  businessId: number;
  loadData: boolean;
}
