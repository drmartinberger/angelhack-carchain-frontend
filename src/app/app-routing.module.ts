import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontendComponent} from "./frontend/frontend.component";
import {ThirdPartyComponent} from "./third-party/third-party.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: FrontendComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'thirdparty',
    component: ThirdPartyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
