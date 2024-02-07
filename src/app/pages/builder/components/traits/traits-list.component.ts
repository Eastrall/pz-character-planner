import { NgClass } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

import { Trait } from "@shared/types";

@Component({
  selector: 'app-traits-list',
  standalone: true,
  templateUrl: './traits-list.component.html',
  imports: [
    NgClass,
    TranslateModule
  ]
})
export class TraitsListComponent {
  @Input({ required: true })
  public traits: Trait[] = [];

  @Input({ required: true })
  public activeTraits: Trait[] = [];

  @Output()
  public selected = new EventEmitter<Trait>();
}
