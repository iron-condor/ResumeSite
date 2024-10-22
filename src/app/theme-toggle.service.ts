import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeToggleService {

  currentTheme = Theme.LIGHT;

  clearThemes() {
    this.document.body.classList.remove(Theme.LIGHT);
    this.document.body.classList.remove(Theme.DARK);
  }

  // TODO: Make this use local storage to remember last theme
  private init() {
    let initialTheme = Theme.LIGHT;
    // Window will be undefined if using SSR
    if (typeof window !== "undefined") {
      const deviceMode = window.matchMedia("(prefers-color-scheme: dark)");
      deviceMode.matches ? (initialTheme = Theme.DARK) : (initialTheme = Theme.LIGHT);
    }
    this.currentTheme = initialTheme;
    this.clearThemes();
    this.document.body.classList.add(this.currentTheme);
  }

  toggleTheme() {
    this.clearThemes();
    if (this.currentTheme === Theme.LIGHT) {
      this.currentTheme = Theme.DARK;
      this.document.body.classList.add(Theme.DARK);
    } else {
      this.currentTheme = Theme.LIGHT;
      this.document.body.classList.add(Theme.LIGHT);
    }
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.init();
  }
}


export enum Theme { LIGHT = "light", DARK = "dark"}