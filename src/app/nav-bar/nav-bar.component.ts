import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Theme, ThemeToggleService } from '../theme-toggle.service';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, AnimationProp } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [NgbModule, RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private themeToggleService: ThemeToggleService, private router: Router) {
    // router.events.filter((event: any) => event instanceof NavigationEnd)
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.active = this.getActiveTab(event.urlAfterRedirects);
      }
    });
  }

  moonIcon = faMoon;
  sunIcon = faSun;
  themeIconAnimation: AnimationProp | undefined = undefined;
  active = 1;

  getActiveTab(url: string): number {
    switch (url) {
      case "/":
      case "/home":
        return 1;
      case "/experience":
        return 2;
      case "/resume":
        return 3;
      default:
        return 1;
    }
  }

  getCurrentTheme() {
    return this.themeToggleService.currentTheme == Theme.LIGHT ? this.sunIcon : this.moonIcon;
  }

  getThemeAnimation(): AnimationProp | undefined {
    return this.themeIconAnimation;
  }

  toggleTheme() {
    this.themeIconAnimation = "bounce";
    this.themeToggleService.toggleTheme();
    setTimeout(() => {
      this.themeIconAnimation = undefined;
    }, 500);
  }

  openGithub() {
    location.href = "https://www.github.com/iron-condor";
  }
}