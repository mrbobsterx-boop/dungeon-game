// Читает баланс из data/monsters.json и создаёт монстров с учётом глубины/биома.
import { createMonster } from './Monster.js';

export class MonsterFactory {
  constructor(monsterDefs) {
    this.defs = monsterDefs;
  }

  spawn(monsterId, x, y) {
    return createMonster(this.defs[monsterId], x, y);
  }

  spawnForBiome(biome, depth, x, y) {
    // выбор случайного монстра, подходящего биому/глубине
  }
}
