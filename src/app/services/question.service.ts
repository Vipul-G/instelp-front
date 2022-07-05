import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { QuestionDto } from '../types/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private apollo: Apollo) {}

  createQuestion(questionDto: QuestionDto) {
    return this.apollo.mutate({
      mutation: gql`
      mutation {
        createQuestion(input: ${questionDto}) {
          question {
            _id
          }
        }
      }
      `
    })
  }
}
