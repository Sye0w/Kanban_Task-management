import { Component } from '@angular/core';
import { HeaderSettingsComponent } from "../header-settings/header-settings.component";
import { AddTaskComponent } from "../add-task/add-task.component";
import { LogoComponent } from "../logo/logo.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderSettingsComponent, AddTaskComponent, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {




}
