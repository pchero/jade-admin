import { ThemeModule } from './../../@theme/theme.module';
import { SettingComponent } from './setting/setting.component';
import { ParkinglotComponent } from './parkinglot/parkinglot.component';
import { ParkedcallComponent } from './parkedcall/parkedcall.component';
import { BackupsettingsComponent } from './backupsettings/backupsettings.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'backupsettings',
      component: BackupsettingsComponent,
    },
    {
      path: 'parkedcall',
      component: ParkedcallComponent,
    },
    {
      path: 'parkinglot',
      component: ParkinglotComponent,
    },
    {
      path: 'setting',
      component: SettingComponent,
    },
  ],
}];

const routedComponents = [
  BackupsettingsComponent,
  ParkedcallComponent,
  ParkinglotComponent,
  SettingComponent,
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
  ]
})
export class ParkRoutingModule { }
