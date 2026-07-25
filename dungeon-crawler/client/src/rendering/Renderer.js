// Отрисовка тайлмапа, сущностей и эффектов на Canvas 2D с учётом камеры и освещения.
export class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  // draw(tileMap, entities, camera, lightMask) { ... }
}
