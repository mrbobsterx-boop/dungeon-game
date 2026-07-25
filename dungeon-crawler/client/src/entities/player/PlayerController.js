// Обработка ввода игрока (клавиатура/тач) -> намерения движения/действия.
export class PlayerController {
  constructor(inputSource) {
    this.input = inputSource;
  }

  getIntent() {
    // return { move: {x, y}, action: 'attack' | 'interact' | null }
  }
}
