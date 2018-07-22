import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BusinessServiceService } from '../business-service.service';
import { Business } from '../business.entity';
import { MatDialog } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-business-create',
  templateUrl: './business-create.component.html',
  styleUrls: ['./business-create.component.css']
})
export class BusinessCreateComponent implements OnInit {

  public tecnologies = new FormControl();

  public tecnologiesList: string[] = ['Angular', 'React', 'VueJs', 'Node', 'Sql', 'Jquery'];

  public category = new FormControl();

  public categoryList: string[] = ['Consulting', 'Sales', 'Gaming', 'Mobile', 'Web'];

  public jobs = new FormControl();

  public jobsList: string[] = ['FrontEnd', 'Backend', 'Ui Designer', 'Community Manager', 'PM'];

  public snetwork = new FormControl();

  public snetworkList: string[] = ['Facebook', 'Twitter', 'Instagram'];

  public model: Business;

  constructor(
    private businessServiceService: BusinessServiceService,
    private dialog: MatDialog) { }

  ngOnInit() {

    this.resetModel();
  }

  public createBusiness() {
    console.log(`${BusinessCreateComponent.name}::createBusiness`);

    this.businessServiceService.createBusiness(this.model)
      .then(() => {
        this.resetModel();
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
