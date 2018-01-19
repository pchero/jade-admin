import { AorComponent } from './aor/aor.component';
import { ContactComponent } from './contact/contact.component';
import { EndpointComponent } from './endpoint/endpoint.component';

import { ThemeModule } from './../../@theme/theme.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'aor',
      component: AorComponent,
    },
    {
      path: 'contact',
      component: ContactComponent,
    },
    {
      path: 'endpoint',
      component: EndpointComponent,
    },
  ],
}];

const routedComponents = [
  AorComponent,
  ContactComponent,
  EndpointComponent,
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
export class PhonePjsipRoutingModule { }
