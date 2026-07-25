// Генерация планировки одного этажа: комнаты, коридоры, соединения, шорткаты.
//
// Этап 0: простой алгоритм "пьяного обхода" (drunkard's walk) — carve'ит
// проходимую область из центра случайными шагами. Достаточно для теста
// рендера/коллизий/освещения; конкретные биомы (Cave/Ruins/Mines/Labyrinth)
// заменят/дополнят этот метод более характерными алгоритмами позже.
import { Tile, TILE_TYPES } from '../Tile.js';
import { TileMap } from '../TileMap.js';

export class FloorGenerator {
  constructor(rng) {
    this.rng = rng; // seeded RNG, см. utils/Random.js
  }

  generate(width, height, floorRatio = 0.45) {
    const map = new TileMap(width, height);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        map.set(x, y, new Tile(TILE_TYPES.WALL, false));
      }
    }

    let x = Math.floor(width / 2);
    let y = Math.floor(height / 2);
    const targetFloorCount = Math.floor(width * height * floorRatio);
    let carved = 0;

    const carve = (cx, cy) => {
      const tile = map.get(cx, cy);
      if (tile && tile.type !== TILE_TYPES.FLOOR) {
        tile.type = TILE_TYPES.FLOOR;
        tile.walkable = true;
        carved++;
      }
    };

    carve(x, y);
    const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    let safety = targetFloorCount * 40; // защита от бесконечного цикла на маленьких картах

    while (carved < targetFloorCount && safety-- > 0) {
      const [dx, dy] = directions[Math.floor(this.rng() * directions.length)];
      const nx = x + dx;
      const ny = y + dy;
      // держим отступ в 1 тайл от края, чтобы этаж был окружён стеной
      if (nx > 0 && ny > 0 && nx < width - 1 && ny < height - 1) {
        x = nx;
        y = ny;
        carve(x, y);
      }
    }

    return map;
  }
}
