import { NgModule } from '@angular/core';
import { MistPageHeaderComponent } from './mist-page-header.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MistPageHeaderComponent
  ],
  imports: [
    CommonModule, RouterLink
  ],
  exports: [
    MistPageHeaderComponent
  ]
})
export class MistPageHeaderModule { }
