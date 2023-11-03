import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson01',
  templateUrl: './lesson01.component.html',
  styleUrls: ['./lesson01.component.scss'],
})
export class Lesson01Component {
  public isRedInput = false;
  public isRedArea = false;

  //  стрічка нецензурних слів, розділена комами
  public badWords = '';
  // масив нецензурних слів
  public badWordsArray!: Array<string>;
  // введене ОДНЕ нецензурне слово яке додається
  public badWord = '';
  // стрічка textArea, яку ми хочемо перевіряти на наявність нецензурних слів
  public textAreaContent = '';

  add(event: Event) {
    event.stopPropagation();
    if (!this.badWord) {
      this.isRedInput = true;
    } else {
      if (!this.badWords) {
        this.badWords += this.badWord;
        console.log('here');
        this.isRedInput = false;
      } else {
        this.badWords += ', ' + this.badWord;
      }
      this.badWord = '';
    }
  }
  reset() {
    this.isRedInput = false;
    this.badWords = '';
    this.textAreaContent = '';
  }
  cenzor(event: Event): void {
    if (!this.textAreaContent) {
      event.stopPropagation();
      this.isRedArea = true;
    } else {
      if (!this.badWords) {
        alert('Ви не ввели жодного слова для фільтру');
      } else {
        // this.textAreaContentArray = this.textAreaContent.split(' ');
        this.badWordsArray = this.badWords.split(', ');
        for (let i = 0; i < this.badWordsArray.length; i++) {
          let regex = new RegExp(`\\b${this.badWordsArray[i]}\\b`, 'gi');
          this.textAreaContent = this.textAreaContent.replace(
            regex,
            '*'.repeat(this.badWordsArray[i].length)
          );
        }
      }
    }
  }

  // метод кліку по всьому контейнеру для зняття червоних виділень із блоків
  divClick() {
    this.isRedInput = false;
    this.isRedArea = false;
  }
}
