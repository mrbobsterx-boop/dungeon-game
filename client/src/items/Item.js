// Базовое описание предмета: id, тип, редкость, стек, модификаторы.
// durability/maxDurability применимы только к экипируемым предметам
// (используются ПочинитьСнаряжение/УлучшитьСнаряжение в лагере).
export class Item {
  constructor({ id, type, rarity = 'common', stackable = false, stats = {}, maxDurability = null }) {
    this.id = id;
    this.type = type;
    this.rarity = rarity;
    this.stackable = stackable;
    this.stats = stats;
    this.maxDurability = maxDurability;
    this.durability = maxDurability;
    this.upgradeLevel = 0; // +1, +2... от УлучшитьСнаряжение
  }
}
