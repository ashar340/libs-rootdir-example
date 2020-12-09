import { NgModule } from '@angular/core';
import { Lib1Component } from './lib1.component';
import { UiComponentsModule } from './ui-components/ui-components.module';


@NgModule({
  declarations: [Lib1Component],
  imports: [UiComponentsModule
  ],
  exports: [Lib1Component]
})
export class Lib1Module { }
