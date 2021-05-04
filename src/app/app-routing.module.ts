import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePwdComponent } from './change-pwd/change-pwd.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocSettingsComponent } from './doc-settings/doc-settings.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
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

const routes: Routes = [
  { path: "", redirectTo: "/start-screen", pathMatch: "full" },
  { path: "start-screen", component: StartScreenComponent },
  { path: "registration", component: RegistrationComponent },
  { path: 'report-problem', component: ReportProblemComponent },
  { path: "home", component: NavBarComponent, children: [
    { path: "", component: DashboardComponent },
    { path: "mapa", component: MapComponent },
    { path: "myprofile", component: MyProfileComponent },
    { path: 'edit-profile', component: EditProfileComponent },
    { path: "notifications", component: NotificationsComponent },
    { path: "incidents", component: MyIncidentsComponent },
    { path: "safety-docs", component:  MySafetyDocsComponent},
    { path: "equipment", component: EquipmentComponent },
    { path: "incidents", component: MyIncidentsComponent },
    { path: "work-requests", component: WorkRequestsComponent },
    { path: 'work-plans', component: MyWorkPlansComponent },
    { path: 'workreq-new', component: WorkreqNewComponent,
        children: [
          { path: "", component:  WorkreqBasicinfoComponent},
          { path: "workreq-history", component: WorkreqHistoryComponent },
          { path: "workreq-multimedia", component: WorkreqMultimediaComponent },
          { path: "workreq-equipment", component: WorkreqEquipmentComponent },
        ] 
    },
    { path: 'users', 
      children:
      [
        { path: '', component: UsersComponent },
        { path: 'new-user', component: NewUserComponent }
      ]
    },
    { path: 'teams', component: TeamComponent },
    { path: 'new-team', component: NewTeamComponent },
    { path: "equipment-new", component: NewEquipmentComponent },
    { path: "settings", component: SettingsComponent,
      children: [
        { path: "", component: ChangePwdComponent },
        { path: "street-priority", component: StreetPriorityComponent},
        { path: "icons", component: IconsComponent },
        { path: "notif", component: NotifSettingsComponent },
        { path: "docs", component: DocSettingsComponent },
        { path: "reset", component: ResetSettingsComponent }
      ]
    },

    {
      path: "safety-docs-new", component: NewSafetyDocsComponent, children: [
        { path: "", component:  NewSafetyDocsBasicInfoComponent},
        { path: "history", component: NewSafetyDocsHistoryComponent },
        { path: "multimedia", component: NewSafetyDocsMultimediaComponent },
        { path: "equipment", component: NewSafetyDocsEquipmentComponent },
        { path: "checklist", component: NewSafetyDocsChecklistComponent }
      ]
    },
    {
      path: 'incident-new', component: NewIncidentComponent, children: [
        { path: "", component: NewIncidentBasicInfoComponent },
        { path: "devices", component: NewIncidentDevicesComponent },
        { path: "resolution", component:  NewIncidentResolutionComponent },
        { path: "calls", children: [
          { path: "", component: NewIncidentCallsComponent },
          { path: "add", component: NewIncidentNewCallsComponent }
        ]
      },
        { path: "crew", component: NewIncidentCrewComponent },
        { path: "multimedia", component: NewIncidentMultimediaComponent },
      ]
    },
    {
      path: 'new-work-plan', component: NewWorkPlanComponent, children:
      [
        { path: '', component: NewWorkPlanBasicInfoComponent},
        { path: 'history', component: NewWorkPlanHistoryComponent},
        { path: 'multimedia', component: NewWorkPlanMultimediaComponent},
        { path: 'equipment', component: NewWorkPlanEquipmentComponent},
        { path: 'instructions', component: NewWorkPlanInstructionsComponent}
      ]
    }

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
