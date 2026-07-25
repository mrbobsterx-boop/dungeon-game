// Хранит и обновляет состояние "неизведано / было видно / видно сейчас" по тайлам,
// используя маску освещённости из rendering/LightingSystem.js.
export class FogOfWar {
  constructor(tileMap) {
    this.tileMap = tileMap;
  }

  reveal(lightMask) {
    // Помечает тайлы в радиусе освещения как discovered/visible.
  }
}
