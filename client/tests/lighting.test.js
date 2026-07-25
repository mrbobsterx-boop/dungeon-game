import { describe, it, expect } from 'vitest';
import { TileMap } from '../src/world/TileMap.js';
import { Tile, TILE_TYPES } from '../src/world/Tile.js';
import { LightingSystem } from '../src/rendering/LightingSystem.js';
import { TILE_SIZE } from '../src/utils/Constants.js';

function buildMap(rows) {
  const height = rows.length;
  const width = rows[0].length;
  const map = new TileMap(width, height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const isWall = rows[y][x] === '#';
      map.set(x, y, new Tile(isWall ? TILE_TYPES.WALL : TILE_TYPES.FLOOR, !isWall));
    }
  }
  return map;
}

describe('LightingSystem', () => {
  it('видит клетки в открытом пространстве в пределах радиуса', () => {
    const map = buildMap([
      '#######',
      '#.....#',
      '#..@..#',
      '#.....#',
      '#######'
    ]);
    const lighting = new LightingSystem(map);
    const visible = lighting.computeVisibleTiles([
      { x: 3.5 * TILE_SIZE, y: 2.5 * TILE_SIZE, radiusTiles: 3 }
    ]);

    expect(visible.has('3,2')).toBe(true); // сам источник
    expect(visible.has('1,2')).toBe(true); // соседняя открытая клетка в радиусе
  });

  it('стена блокирует свет за собой', () => {
    const map = buildMap([
      '#########',
      '#...#...#',
      '#..@#...#',
      '#...#...#',
      '#########'
    ]);
    const lighting = new LightingSystem(map);
    const visible = lighting.computeVisibleTiles([
      { x: 3.5 * TILE_SIZE, y: 2.5 * TILE_SIZE, radiusTiles: 5 }
    ]);

    // клетка сразу за внутренней стеной (x=5) не должна быть видна,
    // хотя формально она в радиусе по прямой дистанции
    expect(visible.has('5,2')).toBe(false);
  });
});
