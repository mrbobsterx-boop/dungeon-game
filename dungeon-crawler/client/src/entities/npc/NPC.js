// Базовая сущность NPC: диалог, роль (торговец/квестодатель/кузнец/лорный персонаж).
import { Entity } from '../Entity.js';
import { PositionComponent } from '../components/PositionComponent.js';

export function createNPC(x, y) {
  return new Entity().add(new PositionComponent(x, y));
}
