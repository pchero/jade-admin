import { LoginComponent } from './login/login.component';

import { NbAuthModule } from '@nebular/auth'

import { ThemeModule } from '../@theme/theme.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'login',
      component: LoginComponent,
    },
  ],
}];

const routedComponents = [
  LoginComponent,
]

@NgModule({
  imports: [
    ThemeModule,
    RouterModule.forChild(routes),
    Ng2SmartTableModule,
    NbAuthModule,
  ],
  exports: [RouterModule],
  declarations: [
    ...routedComponents,
  ],
})
export class AuthRoutingModule { }
