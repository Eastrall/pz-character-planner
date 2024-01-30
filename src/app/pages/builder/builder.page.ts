import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { Occupation } from "@shared/types";
import { OccupationListComponent } from "./components/occupation/occupations-list.component";
import { NegativeTraitsListComponent, PositiveTraitsListComponent } from "./components/traits";

@Component({
  selector: 'app-builder-page',
  standalone: true,
  templateUrl: './builder.page.html',
  imports: [
    TranslateModule,
    OccupationListComponent,
    PositiveTraitsListComponent,
    NegativeTraitsListComponent
  ]
})
export class BuilderPage {
  public occupation: Occupation | null = null;

  public onOccupationSelected(occupation: Occupation): void {
    console.log(occupation);
    this.occupation = occupation;
  }
}
