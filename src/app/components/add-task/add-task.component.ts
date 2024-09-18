// add-task.component.ts
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Subtask {
  title: string;
}

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    CommonModule
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  visible: boolean = false;
  title: string = '';
  description: string = '';
  subtasks: Subtask[] = [{ title: '' }, { title: '' }];
  status: string = 'Todo';
  

  toggleForm() {
    this.visible = !this.visible;
  }

  addSubtask() {
    this.subtasks.push({ title: '' });
  }

  removeSubtask(index: number) {
    this.subtasks.splice(index, 1);
  }

  addTask() {
    if (this.title && this.description) {
      console.log('Adding task:', {
        title: this.title,
        description: this.description,
        subtasks: this.subtasks,
        status: this.status
      });
      this.resetForm();
    } else {
      console.log('Please fill in both title and description');
    }
  }

  resetForm() {
    this.visible = false;
    this.title = '';
    this.description = '';
    this.subtasks = [{ title: '' }, { title: '' }];
    this.status = 'Todo';
  }
}
