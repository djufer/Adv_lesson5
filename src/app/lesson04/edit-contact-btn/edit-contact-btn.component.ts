import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-contact-btn',
  template: ` <button (click)="sendIndex()">Edit</button> `,
  styles: [
    `
      button {
        padding: 5px 20px;
        border: none;
        border-radius: 3px;
        background-color: rgb(205, 205, 52);
      }
    `,
  ],
})
export class EditContactBtnComponent {
  @Output() editPhone = new EventEmitter<number>();
  @Input() index!: number;

  sendIndex() {
    this.editPhone.emit(this.index);
  }
}
