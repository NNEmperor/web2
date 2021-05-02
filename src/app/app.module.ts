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
import { HttpClientModule } from '@angular/common/http';
import { NewUserComponent } from './new-user/new-user.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ReportProblemComponent } from './report-problem/report-problem.component';
import { MySafetyDocsComponent } from './my-safety-docs/my-safety-docs.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { NewEquipmentComponent } from './new-equipment/new-equipment.component';
import { NewSafetyDocsComponent } from './new-safety-docs/new-safety-docs.component';
import { NewSafetyDocsBasicInfoComponent } from './new-safety-docs-basic-info/new-safety-docs-basic-info.component';
import { NewSafetyDocsHistoryComponent } from './new-safety-docs-history/new-safety-docs-history.component';
import { NewSafetyDocsMultimediaComponent } from './new-safety-docs-multimedia/new-safety-docs-multimedia.component';
import { NewSafetyDocsEquipmentComponent } from './new-safety-docs-equipment/new-safety-docs-equipment.component';
import { NewSafetyDocsChecklistComponent } from './new-safety-docs-checklist/new-safety-docs-checklist.component';

import { IgxPieChartModule } from 'igniteui-angular-charts';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts';
import { ChangePwdComponent } from './change-pwd/change-pwd.component';
import { StreetPriorityComponent } from './street-priority/street-priority.component';
import { IconsComponent } from './icons/icons.component';
import { NotifSettingsComponent } from './notif-settings/notif-settings.component';
import { DocSettingsComponent } from './doc-settings/doc-settings.component';
import { ResetSettingsComponent } from './reset-settings/reset-settings.component';
import { TeamComponent } from './team/team.component';
import { NewTeamComponent } from './new-team/new-team.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
    WorkRequestsComponent,
    MapComponent,
    WorkreqNewComponent,
    WorkreqBasicinfoComponent,
    UsersComponent,
    NewIncidentCrewComponent,
    NewIncidentMultimediaComponent,
    NewUserComponent,
    EditProfileComponent,
    ReportProblemComponent,
    MySafetyDocsComponent,
    EquipmentComponent,
    NewEquipmentComponent,
    NewSafetyDocsComponent,
    NewSafetyDocsBasicInfoComponent,
    NewSafetyDocsHistoryComponent,
    NewSafetyDocsMultimediaComponent,
    NewSafetyDocsEquipmentComponent,
    NewSafetyDocsChecklistComponent,
    ChangePwdComponent,
    StreetPriorityComponent,
    IconsComponent,
    NotifSettingsComponent,
    DocSettingsComponent,
    ResetSettingsComponent,
    TeamComponent,
    NewTeamComponent,
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
    RouterModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,//ovo za cek i uncek

   NgMaterialModule,
   MatTableModule,
   MatPaginatorModule,
   MatSortModule,
   HttpClientModule,   //za progressbar

   IgxPieChartModule,
   IgxCategoryChartModule,
   IgxDataChartCoreModule,
   IgxDataChartCategoryModule,
   DragDropModule
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

export class AppBootstrapModule {}