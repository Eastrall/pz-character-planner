import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

import { Occupation, Trait } from "@shared/types";
import { PositiveTraits } from "@data/traits-positive";
import { NegativeTraits } from "@data/traits-negative";
import { OccupationListComponent } from "./components/occupation";
import { TraitsListComponent } from "./components/traits";

@Component({
  selector: 'app-builder-page',
  standalone: true,
  templateUrl: './builder.page.html',
  imports: [
    TranslateModule,
    OccupationListComponent,
    TraitsListComponent
  ]
})
export class BuilderPage {
  public readonly positiveTraitsData: Trait[] = PositiveTraits;
  public readonly negativeTraitsData: Trait[] = NegativeTraits;

  public occupation: Occupation | null = null;
  public positiveTraits: Trait[] = [];
  public negativeTraits: Trait[] = [];

  public onOccupationSelected(occupation: Occupation): void {
    console.log(occupation);
    this.occupation = occupation;
  }

  public onPositiveTraitSelected(trait: Trait): void {
    console.log(trait);
  }

  public onNegativeTraitSelected(trait: Trait): void {
    console.log(trait);
  }
}
