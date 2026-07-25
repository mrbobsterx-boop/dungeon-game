// Текущий источник света существа: радиус, интенсивность, оставшееся "топливо" (масло/заряд).
export class LightSourceComponent {
  constructor(radius, fuel = Infinity) {
    this.radius = radius;
    this.fuel = fuel;
  }
}
