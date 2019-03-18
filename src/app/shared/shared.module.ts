import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatButtonModule,
    MatRadioModule,
    MatListModule,
  ],
  exports: [
    FlexLayoutModule,

    MatButtonModule,
    MatRadioModule,
    MatListModule,
  ]
})
export class SharedModule { }
