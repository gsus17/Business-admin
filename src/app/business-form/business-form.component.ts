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

  public tecnologiesList: string[] = ['Angular', 'React', 'VueJs', 'Node', 'Sql', 'Jquery'];

  public categoryList: string[] = ['Consulting', 'Sales', 'Gaming', 'Mobile', 'Web'];

  public jobsList: string[] = ['FrontEnd', 'Backend', 'Ui Designer', 'Community Manager', 'PM'];

  public snetworkList: string[] = ['Facebook', 'Twitter', 'Instagram'];

  public model: Business;

  public businessId: any;

  public typeForm: any;

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

  public createBusiness() {
    console.log(`${BusinessFormComponent.name}::createBusiness`);

    this.businessServiceService.createBusiness(this.model)
      .then(() => {
        this.resetModel();
        this.openSnackBar('Business Created', 'Continue');
        this.redirecctionProcess();
      });
  }

  public updateBusiness() {
    console.log(`${BusinessFormComponent.name}::updateBusiness`);

    this.businessServiceService.updateBusiness(this.model)
      .then(() => {
        this.resetModel();
        this.openSnackBar('Business Updated', 'Continue');

        this.redirecctionProcess();
      });
  }

  public isEditForm() {
    return this.typeForm;
  }

  private redirecctionProcess(): void {
    setTimeout(
      () => {
        this.route.navigate([`business-list`]);
      }, 300);
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

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
