// Дерево навыков по категориям (вкладки), с узлами, требующими предыдущий узел
// разблокированным и определённый уровень персонажа. Рендерит только структуру
// из data/skills.json + текущий прогресс из SkillTreeSystem — сам не хранит состояние.
export class SkillsUI {
  render(rootEl, skillTreeState, category) {
    // skillTreeState = { unlocked: Map<skillId, rank>, availablePoints: number }
  }
}
