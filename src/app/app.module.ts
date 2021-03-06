import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {BigchainService} from "./bigchain.service";
import {AppRoutingModule} from "./app-routing.module";
import { ThirdPartyComponent } from './third-party/third-party.component';
import { FrontendComponent } from './frontend/frontend.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GmapComponent } from './gmap/gmap.component';
import { OffersComponent } from './offers/offers.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ThirdPartyComponent,
    FrontendComponent,
    DashboardComponent,
    GmapComponent,
    OffersComponent,
    OfferDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    BigchainService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
