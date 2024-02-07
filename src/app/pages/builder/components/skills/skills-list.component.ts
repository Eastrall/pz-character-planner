import { Component, Input } from "@angular/core";
import { SkillsCategoryComponent } from "./skills-category/skills-category.component";
import { Skill } from "@shared/types";

@Component({
  selector: 'app-skills-list',
  standalone: true,
  templateUrl: './skills-list.component.html',
  imports: [
    SkillsCategoryComponent
  ]
})
export class SkillsListComponent {
  @Input()
  public skills: Skill[] = [];
}
