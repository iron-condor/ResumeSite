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

  private init() {
    let initialTheme = null;
    // Window will be undefined if using SSR
    if (typeof window !== "undefined") {
      // If they've changed the theme before, pull it from local storage
      initialTheme = Theme[localStorage.getItem(LOCAL_STORAGE_KEY) as keyof typeof Theme];
      console.log("Initial theme: " + initialTheme);
      // If they haven't already changed the theme, get device's preferred theme via media query
      if (initialTheme == null) {
        const deviceMode = window.matchMedia("(prefers-color-scheme: dark)");
        deviceMode.matches ? (initialTheme = Theme.DARK) : (initialTheme = Theme.LIGHT);
      }
    }
    this.currentTheme = initialTheme ?? Theme.LIGHT;
    this.clearThemes();
    this.document.body.classList.add(this.currentTheme);
  }

  toggleTheme() {
    this.clearThemes();
    let newTheme = (this.currentTheme === Theme.LIGHT) ? Theme.DARK : Theme.LIGHT;
    this.currentTheme = newTheme;
    this.document.body.classList.add(newTheme);
    localStorage.setItem(LOCAL_STORAGE_KEY, newTheme.toUpperCase());
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.init();
  }
}

const LOCAL_STORAGE_KEY = "preferredTheme";
export enum Theme { LIGHT = "light", DARK = "dark"}