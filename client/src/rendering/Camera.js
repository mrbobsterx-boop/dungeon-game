// Следует за игроком, переводит мировые координаты в экранные.
export class Camera {
  constructor(viewportWidth, viewportHeight) {
    this.x = 0; // мировые пиксельные координаты левого верхнего угла камеры
    this.y = 0;
    this.viewportWidth = viewportWidth;
    this.viewportHeight = viewportHeight;
  }

  resize(viewportWidth, viewportHeight) {
    this.viewportWidth = viewportWidth;
    this.viewportHeight = viewportHeight;
  }

  /** @param {{x:number,y:number}} targetWorldPos центр, за которым следует камера */
  follow(targetWorldPos) {
    this.x = targetWorldPos.x - this.viewportWidth / 2;
    this.y = targetWorldPos.y - this.viewportHeight / 2;
  }

  worldToScreen(worldX, worldY) {
    return { x: worldX - this.x, y: worldY - this.y };
  }
}
