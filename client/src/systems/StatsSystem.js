// Единственное место, где первичные атрибуты + бонусы экипировки/навыков
// превращаются во вторичные боевые характеристики (урон, защита, крит,
// скорость атаки/передвижения, вампиризм, уклонение) и сопротивления.
// UI (CharacterUI) только читает результат computeSnapshot — не считает сам.
export class StatsSystem {
  computeSnapshot(entity, equipmentBonuses = {}, skillBonuses = {}) {
    // const stats = entity.get(StatsComponent);
    // const resist = entity.get(ResistancesComponent);
    // return { primary: {...}, combat: { damage, defense, critChance, ... }, resistances: {...} };
  }
}
