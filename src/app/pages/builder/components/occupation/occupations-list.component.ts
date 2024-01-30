import { NgClass } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Occupations } from "@data/occupations";
import { TranslateModule } from "@ngx-translate/core";
import { Occupation } from "@shared/types";

@Component({
  selector: 'app-occupations-list',
  standalone: true,
  templateUrl: './occupations-list.component.html',
  imports: [
    NgClass,
    TranslateModule
  ]
})
export class OccupationListComponent {
  public readonly occupations: Occupation[] = Occupations;

  /**
   * Gets or sets the selected occupation value.
   */
  @Input()
  public selected: Occupation | null = null;

  /**
   * Gets or sets the event emiter when the selected occupation changes.
   */
  @Output()
  public selectedChange = new EventEmitter<Occupation>();
}
