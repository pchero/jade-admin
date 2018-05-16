import { JadeService } from './jade.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateService } from './state.service';
import { SmartTableService } from './smart-table.service';

const SERVICES = [
  StateService,
  SmartTableService,
  JadeService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
