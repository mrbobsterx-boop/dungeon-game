package com.dungeoncrawler.websocket;

import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

/**
 * Заготовка realtime-сессии будущего мультиплеера.
 * Протокол сообщений синхронизирован с client/src/network/protocol.js
 * и описан в shared/schemas/network-protocol.md.
 */
public class GameSessionHandler extends TextWebSocketHandler {
    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        // ...
    }
}
