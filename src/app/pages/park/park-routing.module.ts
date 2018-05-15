import { ConfigComponent } from './config/config.component';
import { SettingComponent } from './setting/setting.component';
import { ParkinglotComponent } from './parkinglot/parkinglot.component';
import { ParkedcallComponent } from './parkedcall/parkedcall.component';
import { CfgParkinglotComponent } from './cfgparkinglot/cfgparkinglot.component';

import { ThemeModule } from './../../@theme/theme.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'parkedcall',
      component: ParkedcallComponent,
    },
    {
      path: 'parkinglot',
      component: ParkinglotComponent,
    },
    {
      path: 'cfgparkinglot',
      component: CfgParkinglotComponent,
    },
    {
      path: 'setting',
      component: SettingComponent,
    },
    {
      path: 'config',
      component: ConfigComponent,
    },
  ],
}];

const routedComponents = [
  ConfigComponent,
  ParkedcallComponent,
  ParkinglotComponent,
  SettingComponent,
  CfgParkinglotComponent,
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
export class ParkRoutingModule { }
