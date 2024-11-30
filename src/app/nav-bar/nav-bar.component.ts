import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Theme, ThemeToggleService } from '../theme-toggle.service';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [NgbModule, RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private themeToggleService: ThemeToggleService) {}

  moonIcon = faMoon;
  sunIcon = faSun;

  getCurrentTheme() {
    return this.themeToggleService.currentTheme == Theme.LIGHT ? this.sunIcon : this.moonIcon;
  }

  toggleTheme() {
    this.themeToggleService.toggleTheme();
  }

  openGithub() {
    location.href = "https://www.github.com/iron-condor";
  }
}