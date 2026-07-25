// Отслеживает нажатые клавиши. Системы читают состояние через isDown(),
// а не подписываются на события напрямую — так проще тестировать и
// заменить источник ввода (например, на геймпад) не трогая логику.
const KEY_ALIASES = {
  ArrowUp: 'up', KeyW: 'up',
  ArrowDown: 'down', KeyS: 'down',
  ArrowLeft: 'left', KeyA: 'left',
  ArrowRight: 'right', KeyD: 'right',
  Space: 'interact',
  KeyE: 'interact'
};

export class InputManager {
  constructor(target = window) {
    this.pressed = new Set();
    this._onKeyDown = (e) => {
      const action = KEY_ALIASES[e.code];
      if (action) this.pressed.add(action);
    };
    this._onKeyUp = (e) => {
      const action = KEY_ALIASES[e.code];
      if (action) this.pressed.delete(action);
    };
    target.addEventListener('keydown', this._onKeyDown);
    target.addEventListener('keyup', this._onKeyUp);
  }

  isDown(action) {
    return this.pressed.has(action);
  }

  dispose(target = window) {
    target.removeEventListener('keydown', this._onKeyDown);
    target.removeEventListener('keyup', this._onKeyUp);
  }
}
