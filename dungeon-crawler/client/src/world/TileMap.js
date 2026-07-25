// 2D-сетка тайлов текущего этажа + доступ по координатам.
export class TileMap {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tiles = new Array(width * height);
  }

  get(x, y) {
    return this.tiles[y * this.width + x];
  }

  set(x, y, tile) {
    this.tiles[y * this.width + x] = tile;
  }
}
