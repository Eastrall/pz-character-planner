import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { NavBarComponent, NavBarButtonComponent } from './shared/components/ui/navbar';
import { IconComponent } from './shared/components/ui/icon';
import { ThemeService } from './services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavBarComponent,
    NavBarButtonComponent,
    IconComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  private readonly themeService = inject(ThemeService);

  public toggleTheme(): void {
    this.themeService.toggle();
  }
}
