import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-btn',
  template: `
    <button (click)="sendIndex()">Edit</button>
  `,
  styles: [
    `
      button {
        padding: 5px 20px;
        border: none;
        border-radius: 3px;
        background-color: yellow;
      }
    `,
  ],
})
export class EditBtnComponent {
  @Output() editTask = new EventEmitter<number>();
  @Input() index!: number;

  sendIndex() {
    this.editTask.emit(this.index);
  }
}
