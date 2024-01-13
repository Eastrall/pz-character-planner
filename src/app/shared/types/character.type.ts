import { Occupation } from "./occupation.type";

export interface Character {
  /**
   * Gets the character id.
   */
  id: string,
  /**
   * Gets the character occupation.
   */
  occupation: Occupation | null,
}
