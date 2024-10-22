import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeToggleService } from '../theme-toggle.service';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [NgbModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private themeToggleService: ThemeToggleService) {}

  getCurrentTheme() {
    return this.themeToggleService.currentTheme;
  }

  toggleTheme() {
    this.themeToggleService.toggleTheme();
  }
}