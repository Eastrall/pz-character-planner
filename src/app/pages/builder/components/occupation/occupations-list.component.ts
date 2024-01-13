import { Component } from "@angular/core";

import { Occupations } from "@data/occupations";
import { Occupation } from "@shared/types";

@Component({
  selector: 'app-occupations-list',
  standalone: true,
  templateUrl: './occupations-list.component.html'
})
export class OccupationListComponent {
  public readonly occupations: Occupation[] = Occupations;
}
