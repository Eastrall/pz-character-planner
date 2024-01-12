import { Component, ElementRef, Input, OnInit, inject } from "@angular/core";
import { IconName } from "./icon-name.type";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { IconKind } from "./icon-kind.type";

@Component({
  selector: '[appIcon]',
  standalone: true,
  template: ``,
  imports: []
})
export class IconComponent implements OnInit {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly httpClient = inject(HttpClient);

  private iconName: IconName | null = null;
  private iconKind: IconKind | null = 'outline';
  private isInitialized: boolean = false;

  public async ngOnInit(): Promise<void> {
    if (!this.isInitialized) {
      await this.setIcon();
      this.isInitialized = true;
    }
  }

  @Input({ required: true })
  public set name(icon: IconName) {
    this.iconName = icon;
    if (this.isInitialized) {
      this.setIcon();
    }
  }

  @Input()
  public set kind(iconKind: IconKind) {
    this.iconKind = iconKind;
    if (this.isInitialized) {
      this.setIcon();
    }
  }

  private async setIcon(): Promise<void> {
    const svg: string = await lastValueFrom(this.httpClient.get(`/assets/heroicons/24/${this.iconKind}/${this.iconName}.svg`, { responseType: 'text' }));

    if (svg) {
      this.elementRef.nativeElement.innerHTML = svg;
    }
  }
}
