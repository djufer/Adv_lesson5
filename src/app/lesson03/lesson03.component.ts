import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lesson03',
  templateUrl: './lesson03.component.html',
  styleUrls: ['./lesson03.component.scss'],
})
export class Lesson03Component {
  public newTaskName!: string;
  public currentIndex!: number;
  public editStatus: boolean = false;
  public allTasks = [
    {
      taskName: 'HTML',
      taskStatus: true,
    },
    {
      taskName: 'CSS3',
      taskStatus: true,
    },
    {
      taskName: 'SCSS',
      taskStatus: false,
    },
  ];
  
  addTask() {
    if (this.newTaskName) {
      let newTask = {
        taskName: this.newTaskName,
        taskStatus: false,
      };
      this.allTasks.push(newTask);
      this.newTaskName = '';
    } else {
      setTimeout(() => alert('Write your task, please'), 0);
    }
  }

  getIndexForDelete(index: number): void {
    this.allTasks.splice(index, 1);
  }
  getIndexForEdit(index: number): void {
    this.currentIndex = index;
    this.newTaskName = this.allTasks[+index].taskName;
    this.editStatus = !this.editStatus;
  }
  editTask() {
    this.allTasks[this.currentIndex].taskName = this.newTaskName;
    this.editStatus = !this.editStatus;
    this.newTaskName = '';
    }
  
}
