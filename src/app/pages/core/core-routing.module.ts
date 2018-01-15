import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';
import { SystemComponent } from './system/system.component';
import { ChannelComponent } from './channel/channel.component';
import { ModuleComponent } from './module/module.component';

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
    },
    {
      path: 'module',
      component: ModuleComponent,
    },
  ],
}];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    // RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [],
})
export class CoreRoutingModule { }

export const routedComponents = [
  CoreComponent,
  SystemComponent,
  ChannelComponent,
]
