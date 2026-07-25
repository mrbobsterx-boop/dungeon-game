// Базовое описание предмета: id, тип, редкость, стек, модификаторы.
export class Item {
  constructor({ id, type, rarity = 'common', stackable = false, stats = {} }) {
    this.id = id;
    this.type = type;
    this.rarity = rarity;
    this.stackable = stackable;
    this.stats = stats;
  }
}
