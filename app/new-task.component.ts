import { Component, EventEmitter } from 'angular2/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
    <div class="task-form">
      <h3>Create Task:</h3>
      <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
      <input placeholder="Priority" class="col-sm-8 input-lg" #newPriority>
      <input placeholder="Category" class="col-sm-8 input-lg" #newCategory>
      <button (click)="addTask(newDescription, newPriority, newCategory)" class="btn-success btn-lg add-button">Add</button>
    </div>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<string[]>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLInputElement, userCategory: HTMLInputElement) {
    var newTaskParams: string[] = [userDescription.value, userPriority.value, userCategory.value];
    this.onSubmitNewTask.emit(newTaskParams);
    console.log(userDescription.value);
    console.log(userPriority.value);
    userDescription.value = "";
    userPriority.value = "";
  }
}

    // var newTask = new Task(userDescription.value, 0);
