import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
}
