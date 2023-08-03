import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task'
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  name: string;
  day: string;
  reminder: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService, public datepipe: DatePipe) {
    this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }
  onSubmit() {
    if (!this.name) {
      alert("Please add a task");
      return;
    }


    const newTask = {
      name: this.name,
      day: this.day,
      reminder: this.reminder
    }

    this.name = "";
    this.day = "";
    this.reminder = false;

    this.onAddTask.emit(newTask);
  }
}
