import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { PresenterComponent } from './presenter/presenter.component';
import { AttempterComponent } from './attempter/attempter.component';
import { ViewComponent } from './view/view.component';

const QuizRoutes: Routes = [
  {
    path: 'quiz',
    component: QuizComponent,
    children: [
      {
        path: '',
        component: ViewComponent,
      },
      {
          path: ':quizId/question/:questionId',
          component: AttempterComponent,
        },
        {
          path: ':id/presenter',
          component: PresenterComponent,
        },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(QuizRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class QuizRoutingModule { }
