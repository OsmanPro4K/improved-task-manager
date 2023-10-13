import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks = ['Test Task', 'Another Test Task'];
  indexNumber = 0;
  mouseHovered = false;
  shouldEdit = false;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.updatedTasks.subscribe((updatedTasks) => {
      this.tasks = updatedTasks;
    });
  }

  onEditClicked() {
    this.shouldEdit = true;
  }

  onCancelWasClicked() {
    this.shouldEdit = false;
  }

  setIndexNumber(index: number) {
    this.indexNumber = index;
  }

  onDeleteClicked(indexNumber: number) {
    this.taskService.deleteTask(indexNumber);
  }
}
