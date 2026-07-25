// Журнал квестов: активные/завершённые/провальные, с типами (главный/побочный/
// фракционный). Каждый квест — список целей (выполнена/нет) и награды
// (золото, предметы, опыт), выдаваемые по завершении последней цели.
export class QuestSystem {
  constructor() {
    this.active = [];
    this.completed = [];
    this.failed = [];
  }

  startQuest(questDef) {}
  completeObjective(questId, objectiveId) {}
  grantRewards(questId) {}
}
