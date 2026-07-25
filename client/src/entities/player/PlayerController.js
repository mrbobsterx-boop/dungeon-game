// Обработка ввода игрока (клавиатура/тач) -> намерения движения/действия.
export class PlayerController {
  constructor(inputManager) {
    this.input = inputManager;
  }

  getIntent() {
    let dx = 0;
    let dy = 0;
    if (this.input.isDown('left')) dx -= 1;
    if (this.input.isDown('right')) dx += 1;
    if (this.input.isDown('up')) dy -= 1;
    if (this.input.isDown('down')) dy += 1;

    // нормализация, чтобы диагональ не была быстрее осевого движения
    if (dx !== 0 && dy !== 0) {
      const len = Math.sqrt(2);
      dx /= len;
      dy /= len;
    }

    return {
      move: { x: dx, y: dy },
      action: this.input.isDown('interact') ? 'interact' : null
    };
  }
}
