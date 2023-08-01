import { Component, inject } from '@angular/core';
import { Choice, Question } from '../question';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent {
  quizService: QuizService = inject(QuizService);

  questions: Question[];
  someQuestion: string[] = [];
  answers: string[] = [];

  currentQuestionIndex = 0;
  isEnd = false;
  isStart = true;

  eachQuestion = false;
  questionList = true;

  constructor(){
    this.questions = this.quizService.getQuizData();

    
    for (let i = 0; i < this.questions.length; i++){
      if(this.questions[i].image == null){
        this.someQuestion.push(this.questions[i].text)
      }
    }

    for (let i = 0; i < this.questions.length; i++) {
      const choices = this.questions[i].choices;
      for (let j = 0; j < choices.length; j++) {
        if (choices[j].isAnswer) {
          this.answers.push(choices[j].text);
        }
      }
    }
  }

  onClickNext(){
    this.clickNext();
  }

  private clickNext(){
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.isStart = false; // ตรวจสอบว่าอยู่ที่คำถามแรกหรือไม่ หากไม่ใช่ ให้ตั้งค่า isStart เป็น false
    } else {
      this.isEnd = true; // ถ้าอยู่ที่คำถามสุดท้ายแล้ว ให้ตั้งค่า isEnd เป็น true เพื่อให้แสดงข้อความ "End of questions"
    }
  }

  onClickPrevious(){
    this.clickPrevious();
  }

  private clickPrevious(){
    if (this.currentQuestionIndex > 0) { // แก้ไขเงื่อนไขในการตรวจสอบ currentQuestionIndex
      this.currentQuestionIndex--;
      this.isEnd = false; // ให้ตั้งค่า isEnd เป็น false เพื่อให้แสดงปุ่ม Next ในทุกกรณี
    } else {
      this.isStart = true; // ถ้าอยู่ที่คำถามแรกแล้ว ให้ตั้งค่า isStart เป็น true เพื่อไม่ให้แสดงปุ่ม Previous
    }
  }

  onClickEach(){
    this.eachQuestion = true;
  }

  onClickList(){
    this.eachQuestion = false;
  }
}
