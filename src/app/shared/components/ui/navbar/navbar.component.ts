import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {
  @Input()
  public title: string | null = 'Project Zomboid - Character Planner';
}
