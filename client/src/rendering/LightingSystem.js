// Считает набор видимых тайлов вокруг источников света лучевым методом
// (raycasting FOV): по кругу пускаются лучи, каждый идёт, пока не упрётся
// в стену или не выйдет за радиус — стены помечаются видимыми (их грань
// освещена), но не пропускают луч дальше. Проще полного recursive
// shadowcasting, этого достаточно для проверки радиуса освещения на этапе 0.
import { TILE_SIZE } from '../utils/Constants.js';

export class LightingSystem {
  constructor(tileMap) {
    this.tileMap = tileMap;
  }

  /**
   * @param {{x:number,y:number,radiusTiles:number}[]} lightSources позиции в пикселях
   * @returns {Set<string>} ключи "x,y" видимых тайлов
   */
  computeVisibleTiles(lightSources) {
    const visible = new Set();

    for (const source of lightSources) {
      const originX = source.x / TILE_SIZE;
      const originY = source.y / TILE_SIZE;
      const radius = source.radiusTiles;
      const rayCount = Math.max(60, Math.floor(radius * 40));

      for (let i = 0; i < rayCount; i++) {
        const angle = (i / rayCount) * Math.PI * 2;
        const dx = Math.cos(angle);
        const dy = Math.sin(angle);
        this._castRay(originX, originY, dx, dy, radius, visible);
      }

      // тайл под самим источником света всегда виден
      visible.add(`${Math.floor(originX)},${Math.floor(originY)}`);
    }

    return visible;
  }

  _castRay(originX, originY, dx, dy, maxDistance, visible) {
    const step = 0.5; // в тайлах, достаточно мелко чтобы не проскочить стену
    let dist = 0;

    while (dist <= maxDistance) {
      const tx = Math.floor(originX + dx * dist);
      const ty = Math.floor(originY + dy * dist);
      visible.add(`${tx},${ty}`);

      if (!this.tileMap.isWalkable(tx, ty)) break; // стена блокирует луч дальше
      dist += step;
    }
  }
}
