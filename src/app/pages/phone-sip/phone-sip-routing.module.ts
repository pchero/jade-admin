
import { ConfigComponent } from './config/config.component';
import { PeerComponent } from './peer/peer.component';
import { RegistryComponent } from './registry/registry.component';

import { ThemeModule } from './../../@theme/theme.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'peer',
      component: PeerComponent,
    },
    {
      path: 'registry',
      component: RegistryComponent,
    },
    {
      path: 'config',
      component: ConfigComponent,
    },
  ],
}];

const routedComponents = [
  PeerComponent,
  RegistryComponent,
  ConfigComponent,
]

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule.forChild(routes),
    Ng2SmartTableModule,
  ],
  exports: [RouterModule],
  declarations: [
    ...routedComponents,
  ],
})
export class PhoneSipRoutingModule { }
