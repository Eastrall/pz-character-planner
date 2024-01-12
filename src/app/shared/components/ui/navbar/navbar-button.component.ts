import { Component } from "@angular/core";

@Component({
  selector: 'a[appNavBarButton],button[appNavBarButton]',
  standalone: true,
  host: {
    'class': 'p-2.5 rounded-lg ring-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700'
  },
  template: `<ng-content />`
})
export class NavBarButtonComponent {
}
