import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Quiz } from '../quiz.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'qz-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  private quizDocList: AngularFirestoreCollection<Quiz>;
  quizList: Observable<Quiz[]>;

  constructor(private db: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.quizDocList = this.db.collection<Quiz>('Quiz');
    this.quizList = this.quizDocList.valueChanges();

    this.quizList.subscribe(quiz => console.log(quiz))
  }

  onQuizClick(quizId: string) {
    this.router.navigateByUrl(`quiz/${quizId}/question/1`);
  }

}
