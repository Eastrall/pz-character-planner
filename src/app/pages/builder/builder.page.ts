import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { Occupation } from "@shared/types";
import { OccupationListComponent } from "./components/occupation/occupations-list.component";

@Component({
  selector: 'app-builder-page',
  standalone: true,
  templateUrl: './builder.page.html',
  imports: [
    TranslateModule,
    OccupationListComponent
  ]
})
export class BuilderPage {
  public onOccupationSelected(occupation: Occupation): void {
    console.log(occupation);
  }
}
