import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Business } from './business.entity';

@Injectable({
  providedIn: 'root'
})
export class BusinessServiceService {

  constructor(private afDb: AngularFireDatabase) { }

  /**
   * Create a business.
   * @param {Business} business
   * @returns {Promise<any>}
   * @memberof BusinessServiceService
   */
  public createBusiness(business: Business): Promise<any> {
    console.log(`${BusinessServiceService.name}::createBusiness`);

    const businessToSave: Business = this.prepareBusinessToSave(business);
    return this.afDb.database.ref(`business/${businessToSave.id}`).set(businessToSave);
  }

  /**
   * Update a business.
   * @param {Business} business
   * @returns {Promise<any>}
   * @memberof BusinessServiceService
   */
  public updateBusiness(business: Business): Promise<any> {
    console.log(`${BusinessServiceService.name}::updateBusiness`);

    const businessToSave: Business = this.prepareBusinessToSave(business);
    return this.afDb.database.ref(`business/${businessToSave.id}`).update(businessToSave);
  }

  /**
   * Return all businnes.
   * @returns {*}
   * @memberof BusinessServiceService
   */
  public getBusinessList(): any {
    console.log(`${BusinessServiceService.name}::getBusinessList`);

    return this.afDb.list('business/');
  }

  /**
   * Delete a business by id.
   * @param {string} businessId
   * @returns {Promise<any>}
   * @memberof BusinessServiceService
   */
  public deleteBusiness(businessId: string): Promise<any> {
    console.log(`${BusinessServiceService.name}::deleteBusiness`);
    return this.afDb.database.ref(`business`).child(businessId).remove();
  }

  /**
   * Return a business by id.
   * @param {number} businessId
   * @returns {Promise<any>}
   * @memberof BusinessServiceService
   */
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

  /**
   * Map to required entity to save.
   * @private
   * @param {Business} business
   * @returns {Business}
   * @memberof BusinessServiceService
   */
  private prepareBusinessToSave(business: Business): Business {
    business = {
      ...business,
      dateCreation: this.registerDate(),
      id: this.generateBusinessId()
    };

    return business;
  }

  /**
   * Generate a random id.
   * @private
   * @returns {number}
   * @memberof BusinessServiceService
   */
  private generateBusinessId(): number {
    const id = Math.round(Math.random());
    return id;
  }

  /**
   * Register date.
   * @private
   * @returns {Date}
   * @memberof BusinessServiceService
   */
  private registerDate(): Date {
    return new Date();
  }
}
