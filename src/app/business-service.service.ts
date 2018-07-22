import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
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
  public updateBusiness(business: Business): Promise<any> {
    console.log(`${BusinessServiceService.name}::updateBusiness`);

    const businessToSave: Business = this.prepareBusinessToSave(business);
    return this.afDb.database.ref(`business/${businessToSave.id}`).update(businessToSave);
  }

  public getBusinessList(): any {
    console.log(`${BusinessServiceService.name}::getBusinessList`);

    return this.afDb.list('business/');
  }

  public deleteBusiness(businessId: string): Promise<any> {
    console.log(`${BusinessServiceService.name}::deleteBusiness`);
    return this.afDb.database.ref(`business`).child(businessId).remove();
  }

  public getBusinesById(businessId: number): Promise<any> {

    const promise = new Promise((resolve, reject) => {
      // tslint:disable-next-line:radix
      this.getBusinessList()
        .valueChanges()
        .subscribe((business: Business[]) => {
          const businessFilteredList: Business[] = business.filter((item: Business) => item.id === businessId);
          const businessToReturn: Business = businessFilteredList[0];
          resolve(businessToReturn);
        });
    });

    return promise;
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
