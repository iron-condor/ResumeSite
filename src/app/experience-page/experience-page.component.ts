import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.scss'
})
export class ExperiencePageComponent {
  swampfoxLogoUrl = '/assets/swampfox-logo.png';
  mlegLogoUrl = '/assets/mleg-logo.png'

  openWebsite(website: string) {
    window.open(website);
  }
}
