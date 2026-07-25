// Базовая сущность облегчённой ECS: контейнер компонентов + уникальный id.
let nextId = 1;

export class Entity {
  constructor() {
    this.id = nextId++;
    this.components = new Map();
  }

  add(component) {
    this.components.set(component.constructor.name, component);
    return this;
  }

  get(componentClass) {
    return this.components.get(componentClass.name);
  }

  has(componentClass) {
    return this.components.has(componentClass.name);
  }
}
