import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateRootComponent } from './modules/dashboard/create-root/create-root.component';
import { SearchRootComponent } from './modules/dashboard/search-root/search-root.component';
import { LoginComponent } from './modules/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NotfoundComponent } from './modules/notfound/notfound.component';
import { AllDetailsComponent } from './modules/dashboard/all-details/all-details.component';
import { SearchAccoComponent } from '../app/modules/dashboard/search-acco/search-acco.component';
import { CreateAccoComponent } from '../app/modules/dashboard/create-acco/create-acco.component';

import { AuthGuard } from './shared';
// import { BreadcrumService } from './shared/breadcrum/breadcrum.service';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
  	path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumbs: true,
      text: 'Home'
    },
    /*8resolve:{
      dashboard:BreadcrumService,
    },*/
	  children: [
    {
      path: 'create-accommodations', component: CreateAccoComponent,
      data: {
        breadcrumbs: true,
        text: 'Create Accommodations'
      }
    },
    {
      path: 'createroot', component: CreateRootComponent,
      data: {
        breadcrumbs: true,
        text: 'create root'
      }
    },
    {
      path: 'search-accommodations', component: SearchAccoComponent,
      data: {
        breadcrumbs: true,
        text: 'Search Accommodations'
      }
   },
    {
      path: 'searchroot', component: SearchRootComponent,
      data: {
        breadcrumbs: true,
        text: 'search root'
      }
   },
  {path: 'not-found', component:  NotfoundComponent},
  {path: '', component: AllDetailsComponent, data : {key : 'AllDetails List'}
  },
    {path: '**', redirectTo: 'not-found'}
  ]
  },
  { path: 'not-found', component: NotfoundComponent  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
