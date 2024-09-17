import { AfterViewInit, Component } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { HeaderSettingsComponent } from "../header-settings/header-settings.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderSettingsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements AfterViewInit{

  ngAfterViewInit() {
    anime({
      targets:'.logo-svg .rect',
      translateX: [-80,0],
      opacity: [0,1],
      duration: 1000,
      delay: anime.stagger(100),
      complete: function(){
        anime({
          targets:'.logo-svg .rect',
          opacity: [
            { value: [0.7, 1], duration: 1200, easing: 'easeInOutSine' },
            { value: [1, 0.7], duration: 1200, easing: 'easeInOutSine' }
          ],
          delay: anime.stagger(150, {direction: 'reverse'}),
          loop: true
        })
      }
    })
  }


}
