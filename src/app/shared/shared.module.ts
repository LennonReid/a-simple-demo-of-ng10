import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      FlexLayoutModule,
      ReactiveFormsModule,
      FormsModule,
      MaterialModule,
  ],
    exports: [
        CommonModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule
    ]
})
export class SharedModule { }
