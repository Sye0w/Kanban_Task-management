import {AfterViewInit, Component } from '@angular/core';

import anime from 'animejs/lib/anime.es.js';
@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent implements AfterViewInit{

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

        anime({
          targets: '.logo-svg .rect:last-child',
          rotate: [
            { value: 0, duration: 0 },
            { value: 50, duration: 1500, easing: 'easeInOutQuad' },
            { value: 50, duration: 3000 },
            { value: 0, duration: 1500, easing: 'easeInOutQuad' },
            { value: 0, duration: 6000 }
          ],
          loop: true
        });
      }
    })
  }
}
