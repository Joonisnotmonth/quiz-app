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
    audio = new Audio();

    constructor(){
      this.audio.src = './assets/audio/mixkit-retro-game-notification-212.wav'
    }

    onClickChoice(choice: Choice){
      console.log(`user click: ${choice.text}`);

      this.playSound();
      
      if(this.currentQuestionIndex < this.questions.length - 1){
        this.currentQuestionIndex++;
      }
    }

    playSound(){
      this.audio.load();
      this.audio.play();
    }
}
