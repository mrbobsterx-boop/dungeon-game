// Игровая сущность игрока: собирает нужные компоненты (позиция, здоровье, инвентарь, свет).
import { Entity } from '../Entity.js';
import { PositionComponent } from '../components/PositionComponent.js';
import { HealthComponent } from '../components/HealthComponent.js';
import { InventoryComponent } from '../components/InventoryComponent.js';
import { LightSourceComponent } from '../components/LightSourceComponent.js';

export function createPlayer() {
  return new Entity()
    .add(new PositionComponent(0, 0))
    .add(new HealthComponent(100))
    .add(new InventoryComponent(20))
    .add(new LightSourceComponent(3, 100)); // стартовый простой фонарь
}
