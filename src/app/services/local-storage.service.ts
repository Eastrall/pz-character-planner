import { Injectable } from "@angular/core";

/**
 * Provides a mechanism to access the browser's local storage.
 */
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  /**
   * Gets the value stored in the local storage matching the given key.
   * @param key Local storage key.
   * @returns The value stored in the local storage matching the given key.
   */
  public getValue(key: string): string | null {
    return localStorage.getItem(key);
  }

  /**
   * Stores the value at the given key in the local storage.
   * @param key Local storage key.
   * @param value Value to store in the local storage.
   */
  public setValue(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}
