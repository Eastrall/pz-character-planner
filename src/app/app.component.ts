import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMoonSolid } from '@ng-icons/heroicons/solid';
import { heroSun }from '@ng-icons/heroicons/outline';
import { simpleGithub } from '@ng-icons/simple-icons';

import { NavBarComponent, NavBarButtonComponent } from './shared/components/ui/navbar';
import { ThemeService } from './services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavBarComponent,
    NavBarButtonComponent,
    NgIconComponent
  ],
  providers: [
    provideIcons({ heroMoonSolid, heroSun, simpleGithub })
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  private readonly themeService = inject(ThemeService);

  public toggleTheme(): void {
    this.themeService.toggle();
  }
}
