import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../node_modules/angularfire2/database';
import { Business } from './business.entity';

@Injectable({
  providedIn: 'root'
})
export class BusinessServiceService {

  constructor(private afDb: AngularFireDatabase) { }

  public createBusiness(business: Business): Promise<any> {
    console.log(`${BusinessServiceService.name}::createBusiness`);

    const businessToSave: Business = this.prepareBusinessToSave(business);
    return this.afDb.database.ref(`business/${businessToSave.id}`).set(businessToSave);
  }

  public getBusinessList(): any {
    console.log(`${BusinessServiceService.name}::getBusinessList`);

    return this.afDb.list('business/');
  }

  private prepareBusinessToSave(business: Business): Business {
    business = {
      ...business,
      dateCreation: this.registerDate(),
      id: this.generateBusinessId()
    };

    return business;
  }

  private generateBusinessId(): number {
    const id = Math.round(Math.random());
    return id;
  }

  private registerDate(): Date {
    return new Date();
  }
}
