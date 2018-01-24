import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'agent',
    loadChildren: './agent/agent-routing.module#AgentRoutingModule',
  }, {
    path: 'core',
    loadChildren: './core/core.module#CoreModule',
  }, {
    path: 'dialplan',
    loadChildren: './dialplan/dialplan-routing.module#DialplanRoutingModule',
  }, {
    path: 'outbound',
    loadChildren: './outbound/outbound-routing.module#OutboundRoutingModule',
  }, {
    path: 'park',
    loadChildren: './park/park-routing.module#ParkRoutingModule',
  }, {
    path: 'phone-pjsip',
    loadChildren: './phone-pjsip/phone-pjsip-routing.module#PhonePjsipRoutingModule',
  }, {
    path: 'queue',
    loadChildren: './queue/queue-routing.module#QueueRoutingModule',
  }, {
    path: 'voicemail',
    loadChildren: './voicemail/voicemail-routing.module#VoicemailRoutingModule',
  }, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
