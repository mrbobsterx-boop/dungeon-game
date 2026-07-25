// Отрисовка тайлмапа, сущностей и эффектов на Canvas 2D с учётом камеры и освещения.
//
// Пока нет спрайтов — рисуем плейсхолдер-графику цветными прямоугольниками/кругом.
// Как только появятся тайлсеты, здесь достаточно заменить fillRect на
// drawImage(spriteManager.get(...)) — остальной пайплайн (камера/fog) не меняется.
import { TILE_SIZE } from '../utils/Constants.js';
import { TILE_TYPES } from '../world/Tile.js';
import { PositionComponent } from '../entities/components/PositionComponent.js';

const COLORS = {
  wall: '#3a3a42',
  floorVisible: '#5a5548',
  floorDiscovered: '#2c2a24', // видели раньше, сейчас не видно — приглушено
  player: '#e8c766',
  background: '#0a0a0c'
};

export class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  clear() {
    this.ctx.fillStyle = COLORS.background;
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

    for (let ty = startY; ty < endY; ty++) {
      for (let tx = startX; tx < endX; tx++) {
        const tile = tileMap.get(tx, ty);
        if (!tile || !tile.discovered) continue; // неизведано — просто фон (темнота)

        let color;
        if (tile.type === TILE_TYPES.WALL) color = COLORS.wall;
        else color = tile.visible ? COLORS.floorVisible : COLORS.floorDiscovered;

        const screen = camera.worldToScreen(tx * TILE_SIZE, ty * TILE_SIZE);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(screen.x, screen.y, TILE_SIZE, TILE_SIZE);
      }
    }
  }

  _drawPlayer(player, camera) {
    const pos = player.get(PositionComponent);
    const screen = camera.worldToScreen(pos.x, pos.y);
    this.ctx.fillStyle = COLORS.player;
    this.ctx.beginPath();
    this.ctx.arc(screen.x, screen.y, 10, 0, Math.PI * 2);
    this.ctx.fill();
  }
}
