// Заготовка клиента будущего мультиплеера. Пока не используется в singleplayer-режиме.
// Будет подключаться к server/ (Java, WebSocket) — см. shared/schemas/network-protocol.md.
export class NetworkClient {
  constructor(url) {
    this.url = url;
    this.socket = null;
  }

  connect() {
    // this.socket = new WebSocket(this.url);
  }
}
