import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  constructor() { }

  questions: any[] = [
    { title: 'Title A', body: 'Body A.......', helpFor: 'Feature', techTags: ['Angular', 'MongoDB'] },
    { title: 'Title B', body: 'Body B.......', helpFor: 'Error', techTags: ['React', 'Python'] }
  ]

  ngOnInit(): void {
  }

}
