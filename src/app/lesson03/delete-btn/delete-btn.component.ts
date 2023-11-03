import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-delete-btn',
  template: `
    <button
      [disabled]="disabled"
      [ngClass]="{
        disabled: disabled
      }"
      (click)="sendIndex()"
    >
      Delete
    </button>
  `,
  styles: [
    `
      button {
        padding: 5px 20px;
        border: none;
        border-radius: 3px;
        background-color: red;
        color: white;
      }
      .disabled {
        background-color: rgb(210, 89, 89);
      }
    `,
  ],
})
export class DeleteBtnComponent {
  @Output() delTask = new EventEmitter<number>();
  @Input() index!: number;
  @Input() disabled: boolean = false;
  sendIndex() {
    this.delTask.emit(this.index);
  }
}
