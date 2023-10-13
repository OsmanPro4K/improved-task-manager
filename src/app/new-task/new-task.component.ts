import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {
  isAddClicked: boolean = false;
  @Input() editEnabled = false;
  @Input() indexNumber = 0;
  @Output() cancelClicked = new EventEmitter<boolean>();
  @ViewChild('taskInput', { static: false }) taskInput!: ElementRef;
  @ViewChild('editInput', { static: false }) editInput!: ElementRef;

  constructor(private taskService: TaskService) {}

  onAddTaskClicked() {
    this.taskService.addTask(this.taskInput.nativeElement.value);
    this.taskInput.nativeElement.value = '';
  }
  onEditConfirmedClicked() {
    this.taskService.editTask(this.editInput.nativeElement.value, this.indexNumber)
    this.cancelClicked.emit(true) // Also Confirmed
  }
  onEditCanceledClicked() {
    this.cancelClicked.emit(false);
  }

  onEnterPressedDuringAddTask() {
    this.taskService.addTask(this.taskInput.nativeElement.value);
    this.taskInput.nativeElement.value = '';
  }

  onEnterPressedDuringEditTask() {
    this.taskService.editTask(this.editInput.nativeElement.value, this.indexNumber)
    this.cancelClicked.emit(true) // Also Confirmed
  }
}
