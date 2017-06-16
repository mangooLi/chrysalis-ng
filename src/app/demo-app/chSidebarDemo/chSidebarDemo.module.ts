import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChSidebarDemoComponent } from './chSidebarDemo.component';
import { ChrysalisNgModule } from './../../export';
@NgModule({
  imports: [
    CommonModule,
    ChrysalisNgModule
  ],
  exports: [ChSidebarDemoComponent],
  declarations: [ChSidebarDemoComponent]
})
export class ChSidebarDemoModule { }
