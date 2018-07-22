import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-business-create',
  templateUrl: './business-create.component.html',
  styleUrls: ['./business-create.component.css']
})
export class BusinessCreateComponent implements OnInit {

  public toppings = new FormControl();

  public toppingList: string[] = ['Angular', 'React', 'VueJs', 'Node', 'Sql', 'Jquery'];

  public jobs = new FormControl();

  public jobsList: string[] = ['FrontEnd', 'Backend', 'Ui Designer', 'Community Manager', 'PM'];

  public snetwork = new FormControl();

  public snetworkList: string[] = ['Facebook', 'Twitter', 'Instagram'];

  constructor() { }

  ngOnInit() {

  }

}
