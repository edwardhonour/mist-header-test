import { NgModule } from '@angular/core';
import { MistInspectorNewsComponent } from './mist-inspector-news.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MistInspectorNewsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MistInspectorNewsComponent
  ]
})
export class MistInspectorNewsModule { }
