import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { QuizComponent } from './quiz.component';
import { PresenterComponent } from './presenter/presenter.component';
import { AttempterComponent } from './attempter/attempter.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [QuizComponent, PresenterComponent, AttempterComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,

    QuizRoutingModule,
  ]
})
export class QuizModule { }
