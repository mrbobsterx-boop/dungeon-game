// Простая шина событий для слабосвязанной коммуникации между системами (бой, UI, звук, квесты...).
export class EventBus {
  constructor() {
    this.listeners = new Map();
  }

  on(eventName, callback) {
    if (!this.listeners.has(eventName)) this.listeners.set(eventName, []);
    this.listeners.get(eventName).push(callback);
  }

  emit(eventName, payload) {
    this.listeners.get(eventName)?.forEach((cb) => cb(payload));
  }
}
