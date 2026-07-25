// Загрузка и кэширование спрайтов по манифестам.
export class SpriteManager {
  constructor() {
    this.images = new Map(); // "категория:ключ" -> HTMLImageElement
  }

  async loadManifest(category, folder) {
    const manifestUrl = `/${folder}/manifest.json`;
    const manifest = await fetch(manifestUrl).then((r) => r.json());
    const entries = Object.entries(manifest).filter(([key]) => !key.startsWith('_'));
    await Promise.all(
      entries.map(([key, filename]) => this._loadOne(category, key, `/${folder}/${filename}`))
    );
  }

  _loadOne(category, key, path) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.images.set(`${category}:${key}`, img);
        resolve(img);
      };
      img.onerror = () => reject(new Error(`Не удалось загрузить спрайт: ${path}`));
      img.src = path;
    });
  }

  get(category, key) {
    return this.images.get(`${category}:${key}`);
  }
}
