import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: string[] = ['Test Task', 'Another Test Task'];
  updatedTasks = new EventEmitter<string[]>();

  addTask(newTask: string) {
    this.tasks.push(newTask);
    this.updatedTasks.emit(this.tasks);
  }

  editTask(edittedTask: string, indexNumber: number) {
    this.tasks.splice(indexNumber, 1, edittedTask);
    this.updatedTasks.emit(this.tasks);
  }

  deleteTask(indexNumber: number) {
    this.tasks.splice(indexNumber, 1);
    this.updatedTasks.emit(this.tasks);
  }
}
