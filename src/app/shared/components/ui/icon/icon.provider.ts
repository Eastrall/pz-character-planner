import { InjectionToken, Provider } from "@angular/core";
import { Observable } from "rxjs";

export type IconLoader = (iconName: string) => Promise<string> | Observable<string> | string;
export const IconLoaderToken = new InjectionToken<IconLoader>('ICON_LOADER_TOKEN');

export function provideIconLoader(loader: IconLoader): Provider {
  return {
    provide: IconLoaderToken,
    useValue: loader
  };
}
