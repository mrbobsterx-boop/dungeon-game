// Интерактивный объект-контейнер (сундук/бочка/мешок/ваза...): открывается
// один раз, выдаёт содержимое из lootTable, дальше остаётся как декорация
// ("пустой"). Не сущность ECS с ИИ — просто позиция + состояние + лут.
export class Container {
  constructor({ type, lootTable, position }) {
    this.type = type;          // 'chest' | 'barrel' | 'sack' | 'vase' | 'lockedChest'
    this.lootTable = lootTable;
    this.position = position;
    this.opened = false;
    this.requiresKey = type === 'lockedChest';
  }
}
