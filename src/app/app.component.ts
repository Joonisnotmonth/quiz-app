import { Component } from '@angular/core';
import { quizData } from './data/quiz_data';
import { Choice } from './question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    questions = quizData;
    currentQuestionIndex = 0;
    score = 0;

    audio = new Audio();

    isEnd = false;

    constructor(){
      this.audio.src = './assets/audio/mixkit-retro-game-notification-212.wav'
      this.newQuiz();
    }

    onClickChoice(choice: Choice){
      console.log(`user click: ${choice.text}`);

      this.playSound();
      if(choice.isAnswer) this.score++;
      
      if(this.currentQuestionIndex < this.questions.length - 1){
        this.currentQuestionIndex++;
      } else{
        this.isEnd = true;
      }
    }

    private playSound(){
      this.audio.load();
      this.audio.addEventListener('canplaythrough',() => {
        this.audio.play()
      });
    }

    onClickNewQuiz(){
      this.newQuiz();
    }

    private newQuiz(){
      this.questions.sort((a,b) => 0.5 - Math.random());
      this.isEnd = false;
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
}
