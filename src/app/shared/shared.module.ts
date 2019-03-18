import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatButtonModule,
    MatRadioModule,
    MatListModule,
    MatToolbarModule
  ],
  exports: [
    FlexLayoutModule,

    MatButtonModule,
    MatRadioModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
