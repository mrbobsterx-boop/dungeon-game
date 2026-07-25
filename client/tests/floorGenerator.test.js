import { describe, it, expect } from 'vitest';
import { createSeededRandom } from '../src/utils/Random.js';
import { FloorGenerator } from '../src/world/dungeon/FloorGenerator.js';
import { TILE_TYPES } from '../src/world/Tile.js';

describe('FloorGenerator', () => {
  it('вырезает примерно заданную долю проходимого пола', () => {
    const rng = createSeededRandom(1);
    const map = new FloorGenerator(rng).generate(40, 30, 0.4);

    let floorCount = 0;
    for (let y = 0; y < map.height; y++) {
      for (let x = 0; x < map.width; x++) {
        if (map.get(x, y).type === TILE_TYPES.FLOOR) floorCount++;
      }
    }

    const ratio = floorCount / (40 * 30);
    expect(ratio).toBeGreaterThan(0.3);
    expect(ratio).toBeLessThan(0.5);
  });

  it('одинаковый seed даёт одинаковую планировку', () => {
    const mapA = new FloorGenerator(createSeededRandom(7)).generate(30, 20, 0.4);
    const mapB = new FloorGenerator(createSeededRandom(7)).generate(30, 20, 0.4);

    expect(mapA.get(15, 10).type).toBe(mapB.get(15, 10).type);
    expect(mapA.get(3, 3).type).toBe(mapB.get(3, 3).type);
  });

  it('края карты остаются стенами (этаж окружён)', () => {
    const map = new FloorGenerator(createSeededRandom(3)).generate(20, 15, 0.4);
    for (let x = 0; x < map.width; x++) {
      expect(map.get(x, 0).type).toBe(TILE_TYPES.WALL);
      expect(map.get(x, map.height - 1).type).toBe(TILE_TYPES.WALL);
    }
  });
});
