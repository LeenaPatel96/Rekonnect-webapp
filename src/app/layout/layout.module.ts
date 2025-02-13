import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { BaseModule } from '../base/base.module';
import { PostJobComponent } from './post-job/post-job.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent, PostJobComponent],
  imports: [
    CommonModule,
    BaseModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
