import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyIncidentsComponent } from './my-incidents/my-incidents.component';
import { NewIncidentComponent } from './new-incident/new-incident.component';
import { NewIncidentBasicInfoComponent } from './new-incident-basic-info/new-incident-basic-info.component';
import { NewIncidentDevicesComponent } from './new-incident-devices/new-incident-devices.component';
import { NewIncidentResolutionComponent } from './new-incident-resolution/new-incident-resolution.component';
import { NewIncidentCallsComponent } from './new-incident-calls/new-incident-calls.component';
import { NewIncidentNewCallsComponent } from './new-incident-new-calls/new-incident-new-calls.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NotificationMenuComponent } from './notification-menu/notification-menu.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SettingsComponent } from './settings/settings.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { WorkRequestsComponent } from './work-requests/work-requests.component';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgMaterialModule } from './ng-material.module';  //za tabelu ubaceno
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { WorkreqNewComponent } from './workreq-new/workreq-new.component';
import { WorkreqBasicinfoComponent } from './workreq-basicinfo/workreq-basicinfo.component';
//import {MatFormFieldModule} from '@angular/material/form-field';
//import { MatInputModule } from '@angular/material/input';
//import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    NavBarComponent,
    RegistrationComponent,
    DashboardComponent,
    MyIncidentsComponent,
    NewIncidentComponent,
    NewIncidentBasicInfoComponent,
    NewIncidentDevicesComponent,
    NewIncidentResolutionComponent,
    NewIncidentCallsComponent,
    NewIncidentNewCallsComponent,
    MyProfileComponent,
    NotificationMenuComponent,
    NotificationsComponent,
    SettingsComponent,
    TopNavbarComponent,
    WorkRequestsComponent,
    MapComponent,
    WorkreqNewComponent,
    WorkreqBasicinfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: StartScreenComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'myprofile', component: MyProfileComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'work-requests',component:WorkRequestsComponent},
      {path: 'mapa',component: MapComponent},
      { path: 'workreq-new',component:WorkreqNewComponent}
    ]),
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,//ovo za cek i uncek

   NgMaterialModule,
   MatTableModule,
   MatPaginatorModule,
   MatSortModule,
    
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

export class AppBootstrapModule {}