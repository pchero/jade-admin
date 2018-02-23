import { ContactComponent } from './contact/contact.component';
import { PermissionComponent } from './permission/permission.component';
import { UserComponent } from './user/user.component';

import { ThemeModule } from './../../@theme/theme.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'contact',
      component: ContactComponent,
    },
    {
      path: 'permission',
      component: PermissionComponent,
    },
    {
      path: 'user',
      component: UserComponent,
    },
  ],
}];

const routedComponents = [
  ContactComponent,
  PermissionComponent,
  UserComponent,
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
export class UserRoutingModule { }
