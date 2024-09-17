import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})

export class AddTaskComponent {

  visible: boolean = false;
  title: string = '';
  description: string = '';

  toggleForm() {
    this.visible = !this.visible;
  }



  addTask() {
    if (this.title && this.description) {
      console.log('Adding task:', { title: this.title, description: this.description });
      this.visible = false;
      this.title = '';
      this.description = '';
    } else {
      console.log('Please fill in both title and description');
    }
  }
}
