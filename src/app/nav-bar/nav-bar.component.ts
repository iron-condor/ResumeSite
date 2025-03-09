import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Theme, ThemeToggleService } from '../theme-toggle.service';
import { faMoon, faSun, faBars, faCaretDown, faCaretUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, AnimationProp } from '@fortawesome/angular-fontawesome';
import { githubURL, linkedInURL } from '../app.config';

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
  faBars = faBars;
  caretUp = faCaretUp;
  caretDown = faCaretDown;
  faEnvelope = faEnvelope;
  linkedInURL = linkedInURL;
  githubURL = githubURL;
  contactMeCollapseIcon = faCaretDown;
  themeIconAnimation: AnimationProp | undefined = undefined;
  contactMeCollapseAnimation: AnimationProp | undefined = undefined;
  active = 0;

  isMenuCollapsed = true;
  isContactMeCollapsed = true;

  getActiveTab(url: string): number {
    switch (url) {
      case "/":
      case "/home":
        return 1;
      case "/experience":
        return 2;
      default:
        return 0;
    }
  }

  getCurrentTheme() {
    return this.themeToggleService.currentTheme == Theme.LIGHT ? this.sunIcon : this.moonIcon;
  }

  getThemeAnimation(): AnimationProp | undefined {
    return this.themeIconAnimation;
  }

  getContactMeCollapseAnimation(): AnimationProp | undefined {
    return this.contactMeCollapseAnimation;
  }

  toggleTheme() {
    this.themeIconAnimation = "bounce";
    this.themeToggleService.toggleTheme();
    setTimeout(() => {
      this.themeIconAnimation = undefined;
    }, 500);
  }

  toggleContactMeCollapsed() {
    this.contactMeCollapseAnimation = "flip";
    this.isContactMeCollapsed = !this.isContactMeCollapsed;
    setTimeout(() => {
      this.contactMeCollapseAnimation = undefined;
      this.contactMeCollapseIcon = this.isContactMeCollapsed ? faCaretDown : faCaretUp;
    }, 250);
  }

  openGithub() {
    location.href = githubURL;
  }

  openLinkedin() {
    location.href = linkedInURL;
  }
}