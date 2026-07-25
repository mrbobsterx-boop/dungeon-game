# Сетевой протокол (черновик, для будущего мультиплеера)

Синхронизирован между:
- `client/src/network/protocol.js`
- `server/src/main/java/com/dungeoncrawler/websocket/GameSessionHandler.java`

## Типы сообщений

| Тип             | Направление     | Описание                          |
|------------------|-----------------|------------------------------------|
| `player_move`    | client → server | Позиция/направление движения игрока |
| `player_action`  | client → server | Атака/взаимодействие/использование предмета |
| `state_sync`     | server → client | Периодическая синхронизация состояния мира |

Формат payload — уточняется по ходу разработки мультиплеера (этап 5 в ROADMAP.md).
