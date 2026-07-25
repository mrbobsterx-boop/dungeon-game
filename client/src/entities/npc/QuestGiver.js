// NPC, выдающий и принимающий квесты (используется вместе с systems/QuestSystem.js).
export class QuestGiver {
  constructor(availableQuests) {
    this.availableQuests = availableQuests;
  }
}
