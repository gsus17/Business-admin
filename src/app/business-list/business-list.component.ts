import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit {

  public businessList: any[] = [
    { id: '1', name: 'Prueba1', category: 'category1', description: '', img: 'assets/images/no-available-image.png' },
    { id: '2', name: 'Prueba2', category: 'category2', description: '', img: 'assets/images/no-available-image.png' },
    { id: '3', name: 'Prueba3', category: 'category3', description: '', img: 'assets/images/no-available-image.png' },
    { id: '4', name: 'Prueba4', category: 'category4', description: '', img: 'assets/images/no-available-image.png' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * name
   */
  public goToDetail(businessId: string) {

    this.router.navigate([`business-detail:id`], { queryParams: { id: businessId } });
  }

}
