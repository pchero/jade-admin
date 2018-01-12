
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';

import { CoreComponent } from './core.component';
import { SystemComponent } from './system/system.component';
import { ChannelComponent } from './channel/channel.component';

const routes: Routes = [{
  path: '',
  component: CoreComponent,
  children: [
    {
      path: 'system',
      component: SystemComponent,
    },
    {
      path: 'channel',
      component: ChannelComponent,
    }
  ],
}];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
    // RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class CoreRoutingModule { }

export const routedComponents = [
  CoreComponent,
  SystemComponent
]
