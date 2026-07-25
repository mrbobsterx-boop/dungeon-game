// Считает маску освещённости вокруг источников света (фонарь игрока и др.)
// и передаёт её в FogOfWar для отметки исследованных/видимых тайлов.
export class LightingSystem {
  constructor(tileMap) {
    this.tileMap = tileMap;
  }

  computeLightMask(lightSources) {
    // Raycasting / shadowcasting по радиусу каждого источника света.
    // Радиус и мягкость света зависят от типа лампы/масла/магии (см. items/LightSources.js).
  }
}
