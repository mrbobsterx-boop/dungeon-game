// Хранит и обновляет состояние "неизведано / было видно / видно сейчас" по тайлам,
// используя набор видимых тайлов из rendering/LightingSystem.js.
export class FogOfWar {
  constructor(tileMap) {
    this.tileMap = tileMap;
  }

  /** @param {Set<string>} visibleTileKeys ключи "x,y" из LightingSystem.computeVisibleTiles */
  reveal(visibleTileKeys) {
    for (let y = 0; y < this.tileMap.height; y++) {
      for (let x = 0; x < this.tileMap.width; x++) {
        const tile = this.tileMap.get(x, y);
        if (!tile) continue;
        const isVisible = visibleTileKeys.has(`${x},${y}`);
        tile.visible = isVisible;
        if (isVisible) tile.discovered = true;
      }
    }
  }
}
