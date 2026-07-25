// Обновление позиций сущностей с учётом коллизий с тайлмапом.
//
// Коллизия проверяется раздельно по X и Y (а не как единый вектор) —
// так персонаж плавно скользит вдоль стены при движении по диагонали,
// вместо того чтобы полностью останавливаться от касания одной оси.
import { TILE_SIZE } from '../utils/Constants.js';
import { PositionComponent } from '../entities/components/PositionComponent.js';

export class MovementSystem {
  /**
   * @param {{get(PositionComponent): PositionComponent}} entity
   * @param {{x:number,y:number}} moveIntent -1..1 по каждой оси
   * @param {number} speed px/сек
   * @param {number} radius px, радиус коллизии сущности
   * @param {import('../world/TileMap.js').TileMap} tileMap
   * @param {number} deltaTime сек
   */
  move(entity, moveIntent, speed, radius, tileMap, deltaTime) {
    const pos = entity.get(PositionComponent);
    const stepX = moveIntent.x * speed * deltaTime;
    const stepY = moveIntent.y * speed * deltaTime;

    if (stepX !== 0) {
      const nextX = pos.x + stepX;
      if (this._canOccupy(nextX, pos.y, radius, tileMap)) pos.x = nextX;
    }
    if (stepY !== 0) {
      const nextY = pos.y + stepY;
      if (this._canOccupy(pos.x, nextY, radius, tileMap)) pos.y = nextY;
    }
  }

  _canOccupy(centerX, centerY, radius, tileMap) {
    // проверяем 4 угла ограничивающего квадрата сущности
    const corners = [
      [centerX - radius, centerY - radius],
      [centerX + radius, centerY - radius],
      [centerX - radius, centerY + radius],
      [centerX + radius, centerY + radius]
    ];
    return corners.every(([px, py]) => {
      const tx = Math.floor(px / TILE_SIZE);
      const ty = Math.floor(py / TILE_SIZE);
      return tileMap.isWalkable(tx, ty);
    });
  }
}
