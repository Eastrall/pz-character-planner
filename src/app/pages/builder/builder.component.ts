import { Component } from "@angular/core";
import { OccupationListComponent } from "./components/occupation/occupations-list.component";

@Component({
  selector: 'app-builder',
  standalone: true,
  templateUrl: './builder.component.html',
  imports: [
    OccupationListComponent
  ]
})
export class BuilderPage {

}
