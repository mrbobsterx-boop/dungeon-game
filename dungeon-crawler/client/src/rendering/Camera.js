// Следует за игроком, переводит мировые координаты в экранные.
export class Camera {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.zoom = 1;
  }

  follow(target) {
    this.x = target.x;
    this.y = target.y;
  }
}
