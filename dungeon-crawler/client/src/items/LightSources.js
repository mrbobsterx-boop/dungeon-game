// Каталог источников света: обычный фонарь, масляная лампа, магический светильник...
// Каждый определяет радиус, расход топлива/заряда, особые эффекты (защита от тьмы-монстров и т.п.)
export const LIGHT_SOURCES = {
  basicLantern: { radius: 3, fuelPerSecond: 0.02 },
  oilLamp:      { radius: 4, fuelPerSecond: 0.03 },
  magicOrb:     { radius: 5, fuelPerSecond: 0 } // не расходует топливо, но редкий
};
