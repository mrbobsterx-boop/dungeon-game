// Фабрика сущности-монстра: позиция, здоровье, ИИ-поведение, дроп при смерти.
import { Entity } from '../Entity.js';
import { PositionComponent } from '../components/PositionComponent.js';
import { HealthComponent } from '../components/HealthComponent.js';
import { AIComponent } from '../components/AIComponent.js';

export function createMonster(definition, x, y) {
  return new Entity()
    .add(new PositionComponent(x, y))
    .add(new HealthComponent(definition.health))
    .add(new AIComponent(definition.behavior));
}
