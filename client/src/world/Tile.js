// Один тайл карты: тип (пол/стена/вода/лава...), проходимость, декорации.
export const TILE_TYPES = {
  WALL: 'wall',
  FLOOR: 'floor'
};

export class Tile {
  constructor(type, walkable = true) {
    this.type = type;
    this.walkable = walkable;
    this.discovered = false; // было ли когда-либо видно (для fog of war)
    this.visible = false;    // видно прямо сейчас
  }
}
