// Первичные атрибуты персонажа (влияют на вторичные боевые характеристики
// через формулы в systems/StatsSystem.js). Значения — база до бонусов экипировки.
export class StatsComponent {
  constructor({ strength = 10, agility = 10, stamina = 10, intelligence = 10, faith = 10 } = {}) {
    this.strength = strength;
    this.agility = agility;
    this.stamina = stamina;
    this.intelligence = intelligence;
    this.faith = faith;
  }
}
