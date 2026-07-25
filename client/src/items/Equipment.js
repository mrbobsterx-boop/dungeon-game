// Слоты экипировки. Порядок влияет только на отображение в CharacterUI (папердолл),
// логика надевания — в systems/InventorySystem.js.
export const EQUIPMENT_SLOTS = [
  'helmet', 'cloak', 'armor', 'gloves', 'boots',   // левая колонка (броня)
  'amulet', 'ring1', 'ring2', 'belt', 'lightSource', // правая колонка (аксессуары)
  'weapon', 'shield', 'offhand'                     // нижний ряд (оружие)
];
