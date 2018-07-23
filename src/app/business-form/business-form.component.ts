import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BusinessServiceService } from '../business-service.service';
import { Business } from '../business.entity';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-business-form',
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.css']
})
export class BusinessFormComponent implements OnInit {

  public tecnologies = new FormControl();
  public category = new FormControl();
  public jobs = new FormControl();
  public snetwork = new FormControl();

  /**
   * Tecnologies list.
   * @type {string[]}
   * @memberof BusinessFormComponent
   */
  public tecnologiesList: string[] = ['Angular', 'React', 'VueJs', 'Node', 'Sql', 'Jquery'];

  /**
   * Category list.
   * @type {string[]}
   * @memberof BusinessFormComponent
   */
  public categoryList: string[] = ['Consulting', 'Sales', 'Gaming', 'Mobile', 'Web'];

  /**
   * Jobs list.
   * @type {string[]}
   * @memberof BusinessFormComponent
   */
  public jobsList: string[] = ['FrontEnd', 'Backend', 'Ui Designer', 'Community Manager', 'PM'];

  /**
   * Social network list.
   * @type {string[]}
   * @memberof BusinessFormComponent
   */
  public snetworkList: string[] = ['Facebook', 'Twitter', 'Instagram'];

  /**
   * Business form model.
   * @type {Business}
   * @memberof BusinessFormComponent
   */
  public model: Business;

  /**
   * Business id.
   * @type {*}
   * @memberof BusinessFormComponent
   */
  public businessId: any = null;

  /**
   * Type form.
   * @type {*}
   * @memberof BusinessFormComponent
   */
  public typeForm: any = false;

  constructor(
    private businessServiceService: BusinessServiceService,
    private router: ActivatedRoute,
    private route: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.resetModel();

    this.router
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.businessId = params.id || null;
        this.typeForm = params.edit || false;

        if (this.typeForm === 'true') {
          this.getBusinessDetail(this.businessId);
        }
      });
  }

  /**
   * Create a new business.
   * @memberof BusinessFormComponent
   */
  public createBusiness() {
    console.log(`${BusinessFormComponent.name}::createBusiness`);

    this.businessServiceService.createBusiness(this.model)
      .then(() => {
        this.resetModel();
        this.openSnackBar('Business Created', 'Continue');
        this.redirecctionProcess();
      });
  }

  /**
   * Update business.
   * @memberof BusinessFormComponent
   */
  public updateBusiness() {
    console.log(`${BusinessFormComponent.name}::updateBusiness`);

    this.businessServiceService.updateBusiness(this.model)
      .then(() => {
        this.resetModel();
        this.openSnackBar('Business Updated', 'Continue');

        this.redirecctionProcess();
      });
  }

  /**
   * Return the type form.
   * @returns
   * @memberof BusinessFormComponent
   */
  public isEditForm() {
    return this.typeForm === 'true';
  }

  /**
   * Go to default view.
   * @private
   * @memberof BusinessFormComponent
   */
  private redirecctionProcess(): void {
    setTimeout(
      () => {
        this.route.navigate([`business-list`]);
      }, 300);
  }

  /**
   * Open snack bar.
   * @private
   * @param {string} message
   * @param {string} action
   * @memberof BusinessFormComponent
   */
  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  /**
   * Return business detail.
   * @private
   * @param {string} businessId
   * @memberof BusinessFormComponent
   */
  private getBusinessDetail(businessId: string) {
    // tslint:disable-next-line:radix
    const bs: number = parseInt(businessId);
    this.businessServiceService.getBusinesById(bs)
      .then((business: Business) => {
        this.model = {
          id: business.id,
          name: business.name,
          img: business.img,
          city: business.city,
          category: business.category,
          dateCreation: business.dateCreation,
          description: business.description,
          jobs: business.jobs,
          tecnologies: business.tecnologies,
          socialNetwork: business.socialNetwork,
          webside: business.webside
        };
      });
  }

  /**
   * Reset component model.
   * @private
   * @memberof BusinessFormComponent
   */
  private resetModel() {
    this.model = {
      id: null,
      name: '',
      img: '',
      city: '',
      category: '',
      dateCreation: null,
      description: '',
      jobs: [],
      tecnologies: [],
      socialNetwork: [],
      webside: ''
    };
  }

}
