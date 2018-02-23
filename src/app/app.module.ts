import { TokenInterceptor } from './shared/token.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AuthGuard, LoaderService, NotifyService, ErrorServiceService  } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { LogoutComponent } from './modules/logout/logout.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NotfoundComponent } from './modules/notfound/notfound.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { NavigationComponent } from './modules/dashboard/navigation/navigation.component';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
import { AllDetailsComponent } from './modules/dashboard/all-details/all-details.component';
import { DataTableModule, ChartModule, GrowlModule, Message } from 'primeng/primeng';  

import { OverlayPanelModule } from 'primeng/overlaypanel';

import { SearchRootComponent } from './modules/dashboard/search-root/search-root.component';
import { CreateRootComponent } from './modules/dashboard/create-root/create-root.component';
import { SearchRootService } from '../app/modules/dashboard/search-root/search-root.service';
import { SearchAccoComponent } from './modules/dashboard/search-acco/search-acco.component';
import { CreateAccoComponent } from './modules/dashboard/create-acco/create-acco.component';
import { SearchAccoService } from './modules/dashboard/search-acco/search-acco.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    DashboardComponent,
    NotfoundComponent,
    AllDetailsComponent,
    SearchRootComponent,
    CreateRootComponent,
    SearchAccoComponent,
    CreateAccoComponent,
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    FormsModule,
    ChartModule,
    HttpClientModule,
    GrowlModule,
    OverlayPanelModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    McBreadcrumbsModule.forRoot()
  ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, 
   LoaderService, 
   NotifyService,
   ErrorServiceService,
   SearchRootService,
   SearchAccoService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
