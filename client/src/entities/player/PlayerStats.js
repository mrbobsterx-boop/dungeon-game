// Прогрессия персонажа: уровень, опыт, очки характеристик, разблокированные скиллы.
export class PlayerStats {
  constructor() {
    this.level = 1;
    this.xp = 0;
    this.skillPoints = 0;
    this.unlockedSkills = new Set();
  }
}
