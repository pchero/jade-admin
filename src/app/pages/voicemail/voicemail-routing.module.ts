import { SettingComponent } from './setting/setting.component';
import { UserComponent } from './user/user.component';
import { MessageComponent } from './message/message.component';


import { ThemeModule } from './../../@theme/theme.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'user',
      component: UserComponent,
    },
    {
      path: 'message',
      component: MessageComponent,
    },
    {
      path: 'setting',
      component: SettingComponent,
    },
  ],
}];

const routedComponents = [
  UserComponent,
  MessageComponent,
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
export class VoicemailRoutingModule { }
