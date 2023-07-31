import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    question = {
      text: 'Who painted the MonaLisa',
      choices: ['Vincent van Gogh', 'Pablo Picasso', 'Michelangelo', 'Leonardo Da Vinci']
    };

    onClickChoice(text: string){
      console.log(text);
    }
}
