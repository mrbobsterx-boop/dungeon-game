// Управляет состояниями игры: меню, игровой процесс, пауза, инвентарь, диалог с NPC и т.д.
export class StateManager {
  constructor(engine) {
    this.engine = engine;
    this.states = new Map();
    this.current = null;
  }

  register(name, state) {
    this.states.set(name, state);
  }

  switchTo(name) {
    this.current?.exit?.();
    this.current = this.states.get(name);
    this.current?.enter?.();
  }

  update(deltaTime) {
    this.current?.update?.(deltaTime);
  }

  render() {
    this.current?.render?.();
  }
}
