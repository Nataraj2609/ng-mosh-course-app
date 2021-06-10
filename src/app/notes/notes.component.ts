import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  tasks = [
    { todo: 'Drink Water', isCompleted: false },
    { todo: 'Hit Gym', isCompleted: true },
    { todo: 'Start a Business', isCompleted: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  createTask(inputTask: HTMLInputElement) {
    let newTask = {
      todo: inputTask.value,
      isCompleted: false
    }
    this.tasks.splice(0, 0, newTask);
    inputTask.value = '';
  }

  completeTask(task: any) {
    task['isCompleted'] = !task['isCompleted'];
  }

  deleteTask(task: any) {
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }
}
