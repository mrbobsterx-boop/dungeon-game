// Управляет разблокировкой узлов дерева навыков: проверка пререквизитов
// (связанный узел выше по уровню должен быть открыт), доступных очков навыков,
// максимального ранга узла. Категории и связи задаются в data/skills.json.
export class SkillTreeSystem {
  constructor(skillDefs) {
    this.defs = skillDefs;
    this.unlocked = new Map(); // skillId -> rank
  }

  canUnlock(skillId, availablePoints) {
    // проверка пререквизита + наличия очков
  }

  unlock(skillId) {
    // ...
  }

  reset() {
    this.unlocked.clear();
  }
}
