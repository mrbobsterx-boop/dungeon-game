// Загрузка и кэширование спрайтов/тайлсетов.
export class SpriteManager {
  constructor() {
    this.cache = new Map();
  }

  async load(key, path) {
    if (this.cache.has(key)) return this.cache.get(key);
    const img = new Image();
    img.src = path;
    await new Promise((resolve) => (img.onload = resolve));
    this.cache.set(key, img);
    return img;
  }
}
