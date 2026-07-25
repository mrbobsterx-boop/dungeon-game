// Редкость предмета: влияет на цвет рамки иконки в инвентаре и на разброс
// характеристик при генерации в ItemFactory.
export const ITEM_RARITY = {
  common:    { order: 0, borderColor: '#8a8a8a' },
  uncommon:  { order: 1, borderColor: '#3ab54a' },
  rare:      { order: 2, borderColor: '#3a8ee0' },
  epic:      { order: 3, borderColor: '#a24fe0' },
  legendary: { order: 4, borderColor: '#e0a83a' }
};
