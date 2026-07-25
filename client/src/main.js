// Точка входа. Ждём загрузки спрайтов, потом инициализируем Engine и стартуем цикл.
import { Engine } from './core/Engine.js';

const canvas = document.getElementById('game-canvas');
const engine = new Engine(canvas);

engine.loadAssets()
  .then(() => engine.start())
  .catch((err) => {
    console.error('Не удалось загрузить спрайты:', err);
    engine.start();
  });
