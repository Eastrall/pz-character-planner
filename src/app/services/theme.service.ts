import { DOCUMENT } from "@angular/common";
import { Injectable, inject } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";

type Theme = 'light' | 'dark';

const ThemeKey: string = 'pzcp-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly document: Document = inject(DOCUMENT);
  private readonly localStorage = inject(LocalStorageService);
  private currentTheme: Theme = 'light';

  /**
   * Initializes the theme service.
   */
  public initialize(): void {
    const theme: Theme = this.localStorage.getValue(ThemeKey) as Theme ?? 'light';

    console.log(`theme is ${theme}`);
    this.setTheme(theme);
  }

  /**
   * Toggle the application theme.
   */
  public toggle(): void {
    this.setTheme(this.currentTheme === 'light' ? 'dark' : 'light');
  }

  /**
   * Sets the given theme.
   * @param newTheme New theme
   */
  private setTheme(newTheme: Theme): void {
    this.document.body.classList.remove(this.currentTheme);
    this.document.body.classList.add(newTheme);

    this.currentTheme = newTheme;
    this.localStorage.setValue(ThemeKey, this.currentTheme);
  }
}
