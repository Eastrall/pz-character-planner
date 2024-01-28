import { Component, EventEmitter, Output } from "@angular/core";

import { Occupations } from "@data/occupations";
import { TranslateModule } from "@ngx-translate/core";
import { Occupation } from "@shared/types";

@Component({
  selector: 'app-occupations-list',
  standalone: true,
  templateUrl: './occupations-list.component.html',
  imports: [
    TranslateModule
  ]
})
export class OccupationListComponent {
  public readonly occupations: Occupation[] = Occupations;

  @Output()
  public selected: EventEmitter<Occupation> = new EventEmitter<Occupation>();
}
