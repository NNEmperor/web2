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
import { UsersComponent } from './users/users.component';
import { NewIncidentCrewComponent } from './new-incident-crew/new-incident-crew.component';
import { NewIncidentMultimediaComponent } from './new-incident-multimedia/new-incident-multimedia.component';
import { NewIncidentEquipmentComponent } from './new-incident-equipment/new-incident-equipment.component';
import { HttpClientModule } from '@angular/common/http';
import { NewUserComponent } from './new-user/new-user.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


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
    NotificationsComponent,
    SettingsComponent,
    TopNavbarComponent,
    WorkRequestsComponent,
    MapComponent,
    WorkreqNewComponent,
    WorkreqBasicinfoComponent,
    UsersComponent,
    NewIncidentCrewComponent,
    NewIncidentMultimediaComponent,
    NewIncidentEquipmentComponent,
    NewUserComponent,
    EditProfileComponent,
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
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'work-requests', component: WorkRequestsComponent},
      { path: 'mapa',component: MapComponent},
      { path: 'workreq-new', component: WorkreqNewComponent},
      { path: 'users', component: UsersComponent },
      { path: 'new-user', component: NewUserComponent },
      { path: 'dashboard', 
        children: [
        { path: "", component: DashboardComponent },
        { path: "incidents", component: MyIncidentsComponent }
        ]
      },
      {
        path: 'incident-new', children: [
          { path: "", component: NewIncidentBasicInfoComponent },
          { path: "devices", component: NewIncidentDevicesComponent },
          { path: "resolution", component: NewIncidentResolutionComponent },
          { path: "calls",
          children: [
            { path: "", component: NewIncidentCallsComponent },
            { path: "add", component: NewIncidentNewCallsComponent }
          ]
        },
          { path: "crew", component: NewIncidentCrewComponent },
          { path: "multimedia", component: NewIncidentMultimediaComponent },
          { path: "equipment", component: NewIncidentEquipmentComponent },
        ]
      }
    ]),
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,//ovo za cek i uncek

   NgMaterialModule,
   MatTableModule,
   MatPaginatorModule,
   MatSortModule,
   HttpClientModule   //za progressbar
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

export class AppBootstrapModule {}