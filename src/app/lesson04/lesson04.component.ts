import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson04',
  templateUrl: './lesson04.component.html',
  styleUrls: ['./lesson04.component.scss'],
})
export class Lesson04Component {
  public currentIndex!: number;
  public newContact!: Contact;
  public allContacts: Contact[] = [
    {
      firstName: 'Alejandro',
      lastName: 'Del Rio Albrechet',
      number: '0633333333',
    },
    {
      firstName: 'Petro',
      lastName: 'Petriv',
      number: '0969876543',
    },
    {
      firstName: 'Oksana',
      lastName: 'Koval',
      number: '0673332211',
    },
    {
      firstName: 'Denys',
      lastName: 'Krutro',
      number: '0689977554',
    },
    {
      firstName: 'Oleg',
      lastName: 'Latyrov',
      number: '0673332233',
    },
    {
      firstName: 'Artem',
      lastName: 'CHerkun',
      number: '0503334455',
    },
  ];
  // сортування
  public sortDirection!: any;
  public sortColumn!: string;

  public field = '';
  public openModal = false;

  // змінні з модалки
  public inpFirstName!: string;
  public inpLastName!: string;
  public inpPhoneNumber!: string;

  public editStatus = false;

  addPhone() {
    
    if (this.inpFirstName && this.inpLastName && this.inpPhoneNumber) {
      let newPhoneObj = {
        firstName: this.inpFirstName,
        lastName: this.inpLastName,
        number: this.inpPhoneNumber,
      };
      this.allContacts.push(newPhoneObj);
      this.openModal = false;
    } else {
      alert('Fill in the form correctly');
    }
    this.inpFirstName = '';
    this.inpLastName = '';
    this.inpPhoneNumber = '';
  }

  // modal logic
  openModalBtn() {
    this.openModal = true;
    this.field = '';
  }
  closeModalButton() {
    this.openModal = false;
  }
  sideClickCloseModal(event: Event) {
    let e = event.target as HTMLElement;
    if (e.id === 'modalWrapper') {
      this.openModal = false;
    }
  }
  getIndexForDelete(index: number): void {
    this.allContacts.splice(index, 1);
  }
  getIndexForEdit(index: number): void {
    this.openModal = true;
    this.editStatus = true;
    this.currentIndex = index;

    this.inpFirstName = this.allContacts[index].firstName;
    this.inpLastName = this.allContacts[index].lastName;
    this.inpPhoneNumber = this.allContacts[index].number;
  }
  editContact() {
    this.openModal = false;
    this.editStatus = false;

    this.allContacts[this.currentIndex].firstName = this.inpFirstName;
    this.allContacts[this.currentIndex].lastName = this.inpLastName;
    this.allContacts[this.currentIndex].number = this.inpPhoneNumber;
  }
  sortClick(event: MouseEvent, sortColumn: string) {
    event.stopPropagation();
    let temp = event.target as HTMLElement;
    this.sortColumn = temp.id;
    
    if (!this.sortDirection || this.sortDirection === 'asc') {
      this.sortDirection = 'desc';
    } else {
      this.sortDirection = 'asc';
    }
  }
}

export interface Contact {
  firstName: string;
  lastName: string;
  number: string;
}
