// Экран персонажа: папердолл-экипировка + первичные атрибуты + вторичные боевые
// характеристики + сопротивления по стихиям. Все цифры считаются StatsSystem —
// UI только читает готовый снапшот, ничего не пересчитывает сам.
export class CharacterUI {
  render(rootEl, player, statsSnapshot) {
    // statsSnapshot = { primary: {...}, combat: {...}, resistances: {...} }
    // см. systems/StatsSystem.js
  }
}
