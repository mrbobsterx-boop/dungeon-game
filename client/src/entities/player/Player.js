// Игровая сущность игрока: собирает нужные компоненты (позиция, здоровье, инвентарь, свет).
import { Entity } from '../Entity.js';
import { PositionComponent } from '../components/PositionComponent.js';
import { HealthComponent } from '../components/HealthComponent.js';
import { InventoryComponent } from '../components/InventoryComponent.js';
import { LightSourceComponent } from '../components/LightSourceComponent.js';

export const PLAYER_RADIUS = 10; // px, для коллизии со стенами (MovementSystem)
export const PLAYER_SPEED = 140; // px/сек

export function createPlayer(spawnX = 0, spawnY = 0) {
  return new Entity()
    .add(new PositionComponent(spawnX, spawnY))
    .add(new HealthComponent(100))
    .add(new InventoryComponent(20))
    .add(new LightSourceComponent(4, 100)); // стартовый простой фонарь, радиус в тайлах
}
