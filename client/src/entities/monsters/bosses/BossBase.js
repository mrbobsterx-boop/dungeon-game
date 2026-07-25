// Общая логика боссов: фазы боя, спец-атаки, арена.
export class BossBase {
  constructor(definition) {
    this.definition = definition;
    this.phase = 1;
  }
}
