// Генерация планировки одного этажа: комнаты, коридоры, соединения, шорткаты.
export class FloorGenerator {
  constructor(rng) {
    this.rng = rng; // seeded RNG, см. utils/Random.js
  }

  generate(width, height, biome) {
    // Делегирует форму пространства конкретному биому (biomes/*.js),
    // затем добавляет секретные проходы и связки между областями.
  }
}
