import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

import { Occupation, Trait } from "@shared/types";
import { PositiveTraits } from "@data/traits-positive";
import { NegativeTraits } from "@data/traits-negative";
import { OccupationListComponent } from "./components/occupation";
import { TraitsListComponent } from "./components/traits";
import { SkillsListComponent } from "./components/skills";

type Character = {
  occupation: Occupation | null,
  traits: Trait[]
};

@Component({
  selector: 'app-builder-page',
  standalone: true,
  templateUrl: './builder.page.html',
  imports: [
    TranslateModule,
    OccupationListComponent,
    TraitsListComponent,
    SkillsListComponent
  ]
})
export class BuilderPage {
  public readonly positiveTraits: Trait[] = PositiveTraits;
  public readonly negativeTraits: Trait[] = NegativeTraits;
  public readonly character: Character = {
    occupation: null,
    traits: []
  };

  public onOccupationSelected(occupation: Occupation): void {
    console.log(occupation);
    this.character.occupation = occupation;
  }

  public onTraitSelected(trait: Trait): void {
    console.log(trait);
    if (this.character.traits.includes(trait)) {
      const traitIndex: number = this.character.traits.findIndex(x => x.id == trait.id);
      this.character.traits.splice(traitIndex, 1);
    }
    else {
      this.character.traits.push(trait);
    }
  }
}
