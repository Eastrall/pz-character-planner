import { LowerCasePipe } from "@angular/common";
import { Component, Input } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { Skill, SkillCategory } from "@shared/types";

@Component({
  selector: 'app-skills-category',
  standalone: true,
  templateUrl: './skills-category.component.html',
  imports: [
    LowerCasePipe,
    TranslateModule
  ]
})
export class SkillsCategoryComponent {
  @Input({ required: true })
  public category: SkillCategory | null = null;

  @Input({ required: true })
  public skills: Skill[] = [];
}
