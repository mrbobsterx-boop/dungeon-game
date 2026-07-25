// Поведенческое состояние ИИ (патруль/погоня/атака/бегство) + ссылка на стратегию.
export class AIComponent {
  constructor(behavior) {
    this.behavior = behavior;
    this.state = 'idle';
  }
}
