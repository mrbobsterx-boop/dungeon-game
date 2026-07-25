// 2D-сетка тайлов текущего этажа + доступ по координатам.
export class TileMap {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tiles = new Array(width * height);
  }

  inBounds(x, y) {
    return x >= 0 && y >= 0 && x < this.width && y < this.height;
  }

  get(x, y) {
    if (!this.inBounds(x, y)) return null;
    return this.tiles[y * this.width + x];
  }

  set(x, y, tile) {
    if (!this.inBounds(x, y)) return;
    this.tiles[y * this.width + x] = tile;
  }

  isWalkable(x, y) {
    const tile = this.get(x, y);
    return !!tile && tile.walkable;
  }
}
