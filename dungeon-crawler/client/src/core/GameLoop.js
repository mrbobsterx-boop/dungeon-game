// Фиксированный/переменный тайминг игрового цикла (requestAnimationFrame).
export class GameLoop {
  constructor(update, render) {
    this.update = update;
    this.render = render;
    this.lastTime = 0;
    this._tick = this._tick.bind(this);
  }

  start() {
    requestAnimationFrame(this._tick);
  }

  _tick(timestamp) {
    const deltaTime = (timestamp - this.lastTime) / 1000;
    this.lastTime = timestamp;

    this.update(deltaTime);
    this.render();

    requestAnimationFrame(this._tick);
  }
}
