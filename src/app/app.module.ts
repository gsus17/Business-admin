import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app.material.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { BusinessCreateComponent } from './business-create/business-create.component';
import { BusinessDetailComponent } from './business-detail/business-detail.component';
import { BusinessListComponent } from './business-list/business-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const appRoutes: Routes = [
  { path: '', component: BusinessListComponent },
  { path: 'business-list', component: BusinessListComponent },
  { path: 'business-detail/:id', component: BusinessDetailComponent },
  { path: 'business-create', component: BusinessCreateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    BusinessCardComponent,
    BusinessCreateComponent,
    BusinessDetailComponent,
    BusinessListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
