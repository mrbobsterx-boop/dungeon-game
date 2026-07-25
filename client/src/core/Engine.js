// Собирает воедино мир, ввод, движение, камеру, освещение и рендерер.
//
// Этап 0: единая "игровая" сцена без меню/паузы — StateManager/EventBus
// подключим, когда появятся реальные состояния (меню, лагерь, диалог),
// пока это была бы преждевременная абстракция без пользы.
import { GameLoop } from './GameLoop.js';
import { InputManager } from '../input/InputManager.js';
import { TILE_SIZE } from '../utils/Constants.js';
import { createSeededRandom } from '../utils/Random.js';
import { FloorGenerator } from '../world/dungeon/FloorGenerator.js';
import { Renderer } from '../rendering/Renderer.js';
import { Camera } from '../rendering/Camera.js';
import { LightingSystem } from '../rendering/LightingSystem.js';
import { FogOfWar } from '../world/FogOfWar.js';
import { MovementSystem } from '../systems/MovementSystem.js';
import { createPlayer, PLAYER_RADIUS, PLAYER_SPEED } from '../entities/player/Player.js';
import { PlayerController } from '../entities/player/PlayerController.js';
import { PositionComponent } from '../entities/components/PositionComponent.js';
import { LightSourceComponent } from '../entities/components/LightSourceComponent.js';

const FLOOR_WIDTH_TILES = 60;
const FLOOR_HEIGHT_TILES = 40;

export class Engine {
  constructor(canvas) {
    this.canvas = canvas;
    this._resizeCanvas();
    window.addEventListener('resize', () => this._resizeCanvas());

    const seed = Date.now() & 0xffffffff;
    const rng = createSeededRandom(seed);

    this.tileMap = new FloorGenerator(rng).generate(FLOOR_WIDTH_TILES, FLOOR_HEIGHT_TILES);
    const spawnTile = this._findWalkableSpawn();
    this.player = createPlayer(
      (spawnTile.x + 0.5) * TILE_SIZE,
      (spawnTile.y + 0.5) * TILE_SIZE
    );

    this.input = new InputManager();
    this.playerController = new PlayerController(this.input);
    this.movementSystem = new MovementSystem();
    this.camera = new Camera(this.canvas.width, this.canvas.height);
    this.renderer = new Renderer(this.canvas);
    this.lighting = new LightingSystem(this.tileMap);
    this.fogOfWar = new FogOfWar(this.tileMap);

    this.loop = new GameLoop(this.update.bind(this), this.render.bind(this));
  }

  start() {
    this.loop.start();
  }

  update(deltaTime) {
    const intent = this.playerController.getIntent();
    this.movementSystem.move(
      this.player, intent.move, PLAYER_SPEED, PLAYER_RADIUS, this.tileMap, deltaTime
    );

    const pos = this.player.get(PositionComponent);
    this.camera.follow(pos);

    const light = this.player.get(LightSourceComponent);
    const visibleTiles = this.lighting.computeVisibleTiles([
      { x: pos.x, y: pos.y, radiusTiles: light.radius }
    ]);
    this.fogOfWar.reveal(visibleTiles);
  }

  render() {
    this.renderer.draw(this.tileMap, this.player, this.camera);
  }

  _resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.camera?.resize(this.canvas.width, this.canvas.height);
  }

  _findWalkableSpawn() {
    const cx = Math.floor(this.tileMap.width / 2);
    const cy = Math.floor(this.tileMap.height / 2);
    if (this.tileMap.isWalkable(cx, cy)) return { x: cx, y: cy };

    // на случай если центр оказался стеной — спираль поиска ближайшего пола
    for (let radius = 1; radius < Math.max(this.tileMap.width, this.tileMap.height); radius++) {
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          if (this.tileMap.isWalkable(cx + dx, cy + dy)) return { x: cx + dx, y: cy + dy };
        }
      }
    }
    return { x: cx, y: cy };
  }
}
