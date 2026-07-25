// Описание рецепта крафта: категория (оружие/броня/инструменты/расходники/
// материалы/другое) и kind — для какого экрана лагеря он доступен
// (item/food/potion/upgrade). requirements — список {itemId, amount}.
export class Recipe {
  constructor({ id, name, category, kind, resultItemId, resultAmount = 1, requirements, rarity = 'common', description = '' }) {
    this.id = id;
    this.name = name;
    this.category = category;      // 'weapon' | 'armor' | 'tools' | 'consumables' | 'materials' | 'other'
    this.kind = kind;               // 'item' | 'food' | 'potion' | 'upgrade'
    this.resultItemId = resultItemId;
    this.resultAmount = resultAmount;
    this.requirements = requirements; // [{ itemId, amount }]
    this.rarity = rarity;
    this.description = description;
  }
}
