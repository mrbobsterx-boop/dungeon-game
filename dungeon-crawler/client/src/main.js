// Точка входа. Инициализирует Engine и запускает игровой цикл.
import { Engine } from './core/Engine.js';

const canvas = document.getElementById('game-canvas');
const engine = new Engine(canvas);
engine.start();
