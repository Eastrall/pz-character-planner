export type SkillCategory = "Passive" | "Agility" | "Combat" | "Crafting" | "Firearm" | "Survivalist";

export interface Skill {
  /**
   * Gets the skill name.
   */
  name: string;

  /**
   * Gets the skill category.
   */
  category: SkillCategory;

  /**
   * Gets the skill starting level.
   */
  startingLevel: number;

  /**
   * Gets the skill experience multiplier.
   */
  multiplier: number;
}
