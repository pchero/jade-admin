import { ThemeModule } from './../../@theme/theme.module';
import { EntryComponent } from './entry/entry.component';
import { MemberComponent } from './member/member.component';
import { QueueComponent } from './queue/queue.component';
import { SettingComponent } from './setting/setting.component';


import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'entry',
      component: EntryComponent,
    },
    {
      path: 'member',
      component: MemberComponent,
    },
    {
      path: 'queue',
      component: QueueComponent,
    },
    {
      path: 'setting',
      component: SettingComponent,
    },
  ],
}];

const routedComponents = [
  EntryComponent,
  MemberComponent,
  QueueComponent,
  SettingComponent,
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
  ]
})
export class QueueRoutingModule { }
