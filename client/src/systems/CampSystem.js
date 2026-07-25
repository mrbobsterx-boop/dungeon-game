// Логика лагеря: игрок ставит лагерь в любой точке подземелья (расходуя
// предмет/ресурс), это открывает CampUI с действиями. Пока лагерь активен,
// зона считается временно безопасной (монстры не агрятся) — см. связку
// с CombatSystem/MonsterAI при реализации.
export class CampSystem {
  constructor({ craftingSystem, restSystem, upgradeSystem, repairSystem }) {
    this.crafting = craftingSystem;
    this.rest = restSystem;
    this.upgrade = upgradeSystem;
    this.repair = repairSystem;
    this.isActive = false;
  }

  pitchCamp(position) {
    // ставит лагерь, блокирует спавн монстров в радиусе, включает isActive
  }

  breakCamp() {
    this.isActive = false;
  }
}
