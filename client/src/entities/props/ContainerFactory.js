// Создаёт контейнеры при генерации этажа, подбирая lootTable по типу
// контейнера, биому и глубине (сундуки богаче бочек, шире по глубине).
export class ContainerFactory {
  constructor(lootTables) {
    this.lootTables = lootTables;
  }

  spawn(type, x, y, depth) {
    // ...
  }
}
