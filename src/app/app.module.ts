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
import { WorkreqHistoryComponent } from './workreq-history/workreq-history.component';
import { WorkreqMultimediaComponent } from './workreq-multimedia/workreq-multimedia.component';
import { WorkreqEquipmentComponent } from './workreq-equipment/workreq-equipment.component';
import { MediaUploadDirective } from './media-upload.directive';
import { ProgressComponent } from './progress/progress.component';
import { MyWorkPlansComponent } from './my-work-plans/my-work-plans.component';
import { NewWorkPlanComponent } from './new-work-plan/new-work-plan.component';
import { NewWorkPlanBasicInfoComponent } from './new-work-plan-basic-info/new-work-plan-basic-info.component';
import { NewWorkPlanEquipmentComponent } from './new-work-plan-equipment/new-work-plan-equipment.component';
import { NewWorkPlanHistoryComponent } from './new-work-plan-history/new-work-plan-history.component';
import { NewWorkPlanInstructionsComponent } from './new-work-plan-instructions/new-work-plan-instructions.component';
import { NewWorkPlanMultimediaComponent } from './new-work-plan-multimedia/new-work-plan-multimedia.component';
import { ProfilesViewComponent } from './profiles-view/profiles-view.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider , FacebookLoginProvider} from 'angularx-social-login';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { SelectDevicesPopUpComponent } from './select-devices-pop-up/select-devices-pop-up.component';
import { NotifierModule } from 'angular-notifier';
import { MapPopUpComponent } from './map-pop-up/map-pop-up.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SelectUserPopUpComponent } from './select-user-pop-up/select-user-pop-up.component';
import { MapDocPopUpComponent } from './map-doc-pop-up/map-doc-pop-up.component';
import { WorkReqIncidentPopUpComponent } from './work-req-incident-pop-up/work-req-incident-pop-up.component';
import { WrBasicInfoPopUpComponent } from './wr-basic-info-pop-up/wr-basic-info-pop-up.component';
import { WrTabComponent } from './wr-tab/wr-tab.component';
import { WrTabInfoComponent } from './wr-tab-info/wr-tab-info.component';
import { WrTabHistoryComponent } from './wr-tab-history/wr-tab-history.component';
import { WrTabMediaComponent } from './wr-tab-media/wr-tab-media.component';
import { WrTabEquipmentComponent } from './wr-tab-equipment/wr-tab-equipment.component';
import { HistoryWrPoUpComponent } from './history-wr-po-up/history-wr-po-up.component';


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
    WorkreqHistoryComponent,
    WorkreqMultimediaComponent,
    WorkreqEquipmentComponent,
    MediaUploadDirective,
    ProgressComponent,
    MyWorkPlansComponent,
    NewWorkPlanComponent,
    NewWorkPlanBasicInfoComponent,
    NewWorkPlanEquipmentComponent,
    NewWorkPlanHistoryComponent,
    NewWorkPlanInstructionsComponent,
    NewWorkPlanMultimediaComponent,
    ProfilesViewComponent,
    EditTeamComponent,
    SelectDevicesPopUpComponent,
    MapPopUpComponent,
    SelectUserPopUpComponent,
    MapDocPopUpComponent,
    WorkReqIncidentPopUpComponent,
    WrBasicInfoPopUpComponent,
    WrTabComponent,
    WrTabInfoComponent,
    WrTabHistoryComponent,
    WrTabMediaComponent,
    WrTabEquipmentComponent,
    HistoryWrPoUpComponent,
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
   DragDropModule,
   SocialLoginModule,
   NotifierModule,
  MatDialogModule
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('432160350527-fvcllu2k73m5s9e4vkqqptne4rmvpaj8.apps.googleusercontent.com')
  },
   {
     id: FacebookLoginProvider.PROVIDER_ID,
     provider: new FacebookLoginProvider('867209693880886')
   },
          
        ]
      } as SocialAuthServiceConfig,
    } 
        ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  


 }

export class AppBootstrapModule {}