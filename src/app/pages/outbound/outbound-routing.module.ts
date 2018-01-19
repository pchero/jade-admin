import { PlanComponent } from './plan/plan.component';
import { DlmaComponent } from './dlma/dlma.component';
import { DiallistComponent } from './diallist/diallist.component';
import { DestinationComponent } from './destination/destination.component';
import { DialingComponent } from './dialing/dialing.component';
import { CampaignComponent } from './campaign/campaign.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'campaign',
      component: CampaignComponent,
    },
    {
      path: 'destination',
      component: DestinationComponent,
    },
    {
      path: 'dialing',
      component: DialingComponent,
    },
    {
      path: 'dlma',
      component: DlmaComponent,
    },
    {
      path: 'diallist',
      component: DiallistComponent,
    },
    {
      path: 'plan',
      component: PlanComponent,
    },
  ],
}];

const routedComponents = [
  CampaignComponent,
  DestinationComponent,
  DialingComponent,
  DlmaComponent,
  PlanComponent,
  DiallistComponent,
]

@NgModule({
  imports: [
    ThemeModule,
    RouterModule.forChild(routes),
    Ng2SmartTableModule,
  ],
  exports: [RouterModule],
  declarations: [
    ...routedComponents,
  ],
})
export class OutboundRoutingModule { }

