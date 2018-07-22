import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-business-detail',
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.css']
})
export class BusinessDetailComponent implements OnInit {

  private businessId: string = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.businessId = this.route.snapshot.params['id'];
    console.log(this.businessId);

  }

}
