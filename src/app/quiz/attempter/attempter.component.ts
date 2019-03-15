import { Component, OnInit } from '@angular/core';
import { Question } from '../quiz.model';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'qz-attempter',
  templateUrl: './attempter.component.html',
  styleUrls: ['./attempter.component.scss']
})
export class AttempterComponent implements OnInit {
  private quesDoc: AngularFirestoreDocument<Question>;
  question: Observable<Question>;

  constructor(private db: AngularFirestore) {
    this.quesDoc = db.doc<Question>('Question/kSxzEgIr5Zc0miP9lJdm')
    this.question = this.quesDoc.valueChanges()
  }
  ngOnInit() {
  }

}
