// Собирает воедино рендерер, менеджер состояний и игровой цикл.
import { GameLoop } from './GameLoop.js';
import { StateManager } from './StateManager.js';
import { EventBus } from './EventBus.js';

export class Engine {
  constructor(canvas) {
    this.canvas = canvas;
    this.events = new EventBus();
    this.states = new StateManager(this);
    this.loop = new GameLoop(this.update.bind(this), this.render.bind(this));
  }

  start() {
    this.loop.start();
  }

  update(deltaTime) {
    this.states.update(deltaTime);
  }

  render() {
    this.states.render();
  }
}
