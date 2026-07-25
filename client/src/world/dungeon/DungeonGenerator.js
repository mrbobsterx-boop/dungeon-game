// Точка входа процедурной генерации: по seed выбирает биом и делегирует FloorGenerator'у.
export class DungeonGenerator {
  constructor(seed) {
    this.seed = seed;
  }

  generateFloor(depth) {
    // 1. выбрать биом по глубине (biomes/*.js)
    // 2. сгенерировать планировку (комнаты/пещеры/лабиринт) — FloorGenerator
    // 3. расставить монстров (entities/monsters/MonsterFactory.js по data/monsters.json)
    // 4. расставить ловушки (TrapGenerator.js)
    // 5. расставить сундуки/бочки (world/dungeon/PropPlacer.js + entities/props/ContainerFactory.js)
    // 6. с некоторым шансом сгенерировать поселение с торговцами (SettlementGenerator.js)
    // 7. расставить секретные комнаты (SecretRooms.js)
    // 8. расставить переходы между этажами (лестницы/лифты/шахты/верёвки)
  }
}
