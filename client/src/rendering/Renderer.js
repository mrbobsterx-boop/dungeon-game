// Отрисовка тайлмапа, сущностей и эффектов на Canvas 2D с учётом камеры и освещения.
// Рисует реальные спрайты через SpriteManager; если спрайта нет — откат на цвет.
import { TILE_SIZE } from '../utils/Constants.js';
import { TILE_TYPES } from '../world/Tile.js';
import { PositionComponent } from '../entities/components/PositionComponent.js';

const FALLBACK_COLORS = {
  wall: '#3a3a42',
  floorVisible: '#5a5548',
  player: '#e8c766',
  background: '#0a0a0c'
};

const PLAYER_SPRITE_HEIGHT = 48;

export class Renderer {
  constructor(canvas, spriteManager) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.sprites = spriteManager;
  }

  clear() {
    this.ctx.fillStyle = FALLBACK_COLORS.background;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  draw(tileMap, player, camera) {
    this.clear();
    this._drawTiles(tileMap, camera);
    this._drawPlayer(player, camera);
  }

  _drawTiles(tileMap, camera) {
    const startX = Math.max(0, Math.floor(camera.x / TILE_SIZE));
    const startY = Math.max(0, Math.floor(camera.y / TILE_SIZE));
    const endX = Math.min(tileMap.width, Math.ceil((camera.x + camera.viewportWidth) / TILE_SIZE) + 1);
    const endY = Math.min(tileMap.height, Math.ceil((camera.y + camera.viewportHeight) / TILE_SIZE) + 1);

    const wallSprite = this.sprites?.get('tile', 'wall_straight');
    const floorSprite = this.sprites?.get('tile', 'floor_base');

    for (let ty = startY; ty < endY; ty++) {
      for (let tx = startX; tx < endX; tx++) {
        const tile = tileMap.get(tx, ty);
        if (!tile || !tile.discovered) continue;

        const screen = camera.worldToScreen(tx * TILE_SIZE, ty * TILE_SIZE);
        const sprite = tile.type === TILE_TYPES.WALL ? wallSprite : floorSprite;

        if (sprite) {
          this.ctx.drawImage(sprite, screen.x, screen.y, TILE_SIZE, TILE_SIZE);
        } else {
          this.ctx.fillStyle = tile.type === TILE_TYPES.WALL ? FALLBACK_COLORS.wall : FALLBACK_COLORS.floorVisible;
          this.ctx.fillRect(screen.x, screen.y, TILE_SIZE, TILE_SIZE);
        }

        if (tile.type !== TILE_TYPES.WALL && !tile.visible) {
          this.ctx.fillStyle = 'rgba(0,0,0,0.55)';
          this.ctx.fillRect(screen.x, screen.y, TILE_SIZE, TILE_SIZE);
        }
      }
    }
  }

  _drawPlayer(player, camera) {
    const pos = player.get(PositionComponent);
    const screen = camera.worldToScreen(pos.x, pos.y);
    const sprite = this.sprites?.get('player', 'idle_front');

    if (sprite) {
      const scale = PLAYER_SPRITE_HEIGHT / sprite.height;
      const w = sprite.width * scale;
      const h = sprite.height * scale;
      this.ctx.drawImage(sprite, screen.x - w / 2, screen.y - h + TILE_SIZE / 2, w, h);
    } else {
      this.ctx.fillStyle = FALLBACK_COLORS.player;
      this.ctx.beginPath();
      this.ctx.arc(screen.x, screen.y, 10, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }
}
