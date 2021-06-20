import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { ChangePwdComponent } from './change-pwd/change-pwd.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocSettingsComponent } from './doc-settings/doc-settings.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { IconsComponent } from './icons/icons.component';
import { MapComponent } from './map/map.component';
import { MyIncidentsComponent } from './my-incidents/my-incidents.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MySafetyDocsComponent } from './my-safety-docs/my-safety-docs.component';
import { MyWorkPlansComponent } from './my-work-plans/my-work-plans.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewEquipmentComponent } from './new-equipment/new-equipment.component';
import { NewIncidentBasicInfoComponent } from './new-incident-basic-info/new-incident-basic-info.component';
import { NewIncidentCallsComponent } from './new-incident-calls/new-incident-calls.component';
import { NewIncidentCrewComponent } from './new-incident-crew/new-incident-crew.component';
import { NewIncidentDevicesComponent } from './new-incident-devices/new-incident-devices.component';
import { NewIncidentMultimediaComponent } from './new-incident-multimedia/new-incident-multimedia.component';
import { NewIncidentNewCallsComponent } from './new-incident-new-calls/new-incident-new-calls.component';
import { NewIncidentResolutionComponent } from './new-incident-resolution/new-incident-resolution.component';
import { NewIncidentComponent } from './new-incident/new-incident.component';
import { NewSafetyDocsBasicInfoComponent } from './new-safety-docs-basic-info/new-safety-docs-basic-info.component';
import { NewSafetyDocsChecklistComponent } from './new-safety-docs-checklist/new-safety-docs-checklist.component';
import { NewSafetyDocsEquipmentComponent } from './new-safety-docs-equipment/new-safety-docs-equipment.component';
import { NewSafetyDocsHistoryComponent } from './new-safety-docs-history/new-safety-docs-history.component';
import { NewSafetyDocsMultimediaComponent } from './new-safety-docs-multimedia/new-safety-docs-multimedia.component';
import { NewSafetyDocsComponent } from './new-safety-docs/new-safety-docs.component';
import { NewTeamComponent } from './new-team/new-team.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewWorkPlanBasicInfoComponent } from './new-work-plan-basic-info/new-work-plan-basic-info.component';
import { NewWorkPlanEquipmentComponent } from './new-work-plan-equipment/new-work-plan-equipment.component';
import { NewWorkPlanHistoryComponent } from './new-work-plan-history/new-work-plan-history.component';
import { NewWorkPlanInstructionsComponent } from './new-work-plan-instructions/new-work-plan-instructions.component';
import { NewWorkPlanMultimediaComponent } from './new-work-plan-multimedia/new-work-plan-multimedia.component';
import { NewWorkPlanComponent } from './new-work-plan/new-work-plan.component';
import { NotifSettingsComponent } from './notif-settings/notif-settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfilesViewComponent } from './profiles-view/profiles-view.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReportProblemComponent } from './report-problem/report-problem.component';
import { ResetSettingsComponent } from './reset-settings/reset-settings.component';
import { SettingsComponent } from './settings/settings.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { StreetPriorityComponent } from './street-priority/street-priority.component';
import { TeamComponent } from './team/team.component';
import { UsersComponent } from './users/users.component';
import { WorkRequestsComponent } from './work-requests/work-requests.component';
import { WorkreqBasicinfoComponent } from './workreq-basicinfo/workreq-basicinfo.component';
import { WorkreqEquipmentComponent } from './workreq-equipment/workreq-equipment.component';
import { WorkreqHistoryComponent } from './workreq-history/workreq-history.component';
import { WorkreqMultimediaComponent } from './workreq-multimedia/workreq-multimedia.component';
import { WorkreqNewComponent } from './workreq-new/workreq-new.component';
import { WrTabEquipmentComponent } from './wr-tab-equipment/wr-tab-equipment.component';
import { WrTabHistoryComponent } from './wr-tab-history/wr-tab-history.component';
import { WrTabInfoComponent } from './wr-tab-info/wr-tab-info.component';
import { WrTabMediaComponent } from './wr-tab-media/wr-tab-media.component';
import { WrTabComponent } from './wr-tab/wr-tab.component';

const routes: Routes = [
  { path: "", redirectTo: "/start-screen", pathMatch: "full" },
  { path: "start-screen", component: StartScreenComponent },
  { path: "registration", component: RegistrationComponent },
  { path: 'report-problem', component: ReportProblemComponent },
  { path: "home", component: NavBarComponent, children: [
    { path: "", component: DashboardComponent, canActivate: [AuthGuardService] },
    { path: "mapa", component: MapComponent, canActivate: [AuthGuardService] },
    { path: "myprofile", component: MyProfileComponent, canActivate: [AuthGuardService] },
    { path: 'edit-profile', component: EditProfileComponent, canActivate: [AuthGuardService] },
    { path: "profiles", component: ProfilesViewComponent, canActivate: [AuthGuardService] },
    { path: "notifications", component: NotificationsComponent, canActivate: [AuthGuardService] },
    { path: "incidents", component: MyIncidentsComponent, canActivate: [AuthGuardService] },
    { path: "safety-docs", component:  MySafetyDocsComponent, canActivate: [AuthGuardService]},
    { path: "equipment", component: EquipmentComponent, canActivate: [AuthGuardService] },
    { path: "incidents", component: MyIncidentsComponent, canActivate: [AuthGuardService] },
    { path: "work-requests", component: WorkRequestsComponent, canActivate: [AuthGuardService] },
    { path: 'work-plans', component: MyWorkPlansComponent, canActivate: [AuthGuardService] },
    { path: 'edit-team', component:EditTeamComponent, canActivate: [AuthGuardService] },
    { path: 'workreq-new', component: WorkreqNewComponent,
        children: [
          { path: "", component:  WorkreqBasicinfoComponent, canActivate: [AuthGuardService]},
          { path: "workreq-history", component: WorkreqHistoryComponent, canActivate: [AuthGuardService] },
          { path: "workreq-multimedia", component: WorkreqMultimediaComponent, canActivate: [AuthGuardService] },
          { path: "workreq-equipment", component: WorkreqEquipmentComponent, canActivate: [AuthGuardService] },
        ] 
    },
    { path: 'workreq-update', component: WrTabComponent,
        children: [
          { path: "", component:  WrTabInfoComponent, canActivate: [AuthGuardService]},
          { path: "work-r-history", component: WrTabHistoryComponent, canActivate: [AuthGuardService] },
          { path: "work-r-multimedia", component: WrTabMediaComponent, canActivate: [AuthGuardService] },
          { path: "work-r-equipment", component: WrTabEquipmentComponent, canActivate: [AuthGuardService] },
        ] 
    },
    { path: 'users', 
      children:
      [
        { path: '', component: UsersComponent, canActivate: [AuthGuardService] },
        { path: 'new-user', component: NewUserComponent, canActivate: [AuthGuardService] }
      ]
    },
    { path: 'teams', component: TeamComponent, canActivate: [AuthGuardService] },
    { path: 'new-team', component: NewTeamComponent, canActivate: [AuthGuardService] },
    { path: "equipment-new", component: NewEquipmentComponent, canActivate: [AuthGuardService] },
    { path: "settings", component: SettingsComponent,
      children: [
        { path: "", component: ChangePwdComponent, canActivate: [AuthGuardService] },
        { path: "street-priority", component: StreetPriorityComponent, canActivate: [AuthGuardService]},
        { path: "icons", component: IconsComponent, canActivate: [AuthGuardService] },
        { path: "notif", component: NotifSettingsComponent, canActivate: [AuthGuardService] },
        { path: "docs", component: DocSettingsComponent, canActivate: [AuthGuardService] },
        { path: "reset", component: ResetSettingsComponent, canActivate: [AuthGuardService] }
      ]
    },

    {
      path: "safety-docs-new", component: NewSafetyDocsComponent, children: [
        { path: "", component:  NewSafetyDocsBasicInfoComponent, canActivate: [AuthGuardService]},
        { path: "history", component: NewSafetyDocsHistoryComponent, canActivate: [AuthGuardService] },
        { path: "multimedia", component: NewSafetyDocsMultimediaComponent, canActivate: [AuthGuardService] },
        { path: "equipment", component: NewSafetyDocsEquipmentComponent, canActivate: [AuthGuardService] },
        { path: "checklist", component: NewSafetyDocsChecklistComponent, canActivate: [AuthGuardService] }
      ]
    },
    {
      path: 'incident-new', component: NewIncidentComponent, children: [
        { path: "", component: NewIncidentBasicInfoComponent, canActivate: [AuthGuardService] },
        { path: "devices", component: NewIncidentDevicesComponent, canActivate: [AuthGuardService] },
        { path: "resolution", component:  NewIncidentResolutionComponent, canActivate: [AuthGuardService] },
        { path: "calls", children: [
          { path: "", component: NewIncidentCallsComponent, canActivate: [AuthGuardService] },
          { path: "add", component: NewIncidentNewCallsComponent, canActivate: [AuthGuardService] }
        ]
      },
        { path: "crew", component: NewIncidentCrewComponent, canActivate: [AuthGuardService] },
        { path: "multimedia", component: NewIncidentMultimediaComponent, canActivate: [AuthGuardService] },
      ]
    },
    {
      path: 'new-work-plan', component: NewWorkPlanComponent, children:
      [
        { path: '', component: NewWorkPlanBasicInfoComponent, canActivate: [AuthGuardService]},
        { path: 'history', component: NewWorkPlanHistoryComponent, canActivate: [AuthGuardService]},
        { path: 'multimedia', component: NewWorkPlanMultimediaComponent, canActivate: [AuthGuardService]},
        { path: 'equipment', component: NewWorkPlanEquipmentComponent, canActivate: [AuthGuardService]},
        { path: 'instructions', component: NewWorkPlanInstructionsComponent, canActivate: [AuthGuardService]}
      ]
    }

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
