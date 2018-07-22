import { Routes } from '../../node_modules/@angular/router';
import { BusinessListComponent } from './business-list/business-list.component';
import { BusinessDetailComponent } from './business-detail/business-detail.component';
import { BusinessFormComponent } from './business-form/business-form.component';

export const appRoutes: Routes = [
    { path: '', component: BusinessListComponent },
    { path: 'business-list', component: BusinessListComponent },
    { path: 'business-detail/:id', component: BusinessDetailComponent },
    { path: 'business-form', component: BusinessFormComponent }
];
