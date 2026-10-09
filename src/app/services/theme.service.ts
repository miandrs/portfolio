import { Injectable, Inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly KEY = 'theme';
  theme = signal<Theme>('light');

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.theme.set(this.getInitialTheme());
    this.apply(this.theme());
  }

  toggle() {
    const next: Theme = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(next);
    this.apply(next);
    try { localStorage.setItem(this.KEY, next); } catch {}
  }

  private getInitialTheme(): Theme {
    try {
      const saved = localStorage.getItem(this.KEY) as Theme | null;
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {}
    return 'light';
  }

  private apply(theme: Theme) {
    this.document.documentElement.setAttribute('data-theme', theme);
  }
}