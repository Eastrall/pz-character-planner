import { DOCUMENT } from "@angular/common";
import { Injectable, inject } from "@angular/core";

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly document: Document = inject(DOCUMENT);
  private currentTheme: Theme = 'light';

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
  }
}
