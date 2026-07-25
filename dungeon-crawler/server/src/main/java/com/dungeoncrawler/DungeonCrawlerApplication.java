package com.dungeoncrawler;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Точка входа бэкенда. На данном этапе разработки не обязателен —
 * клиент (client/) работает автономно, singleplayer без сервера.
 * Сервер подключается позже: аккаунты, облачные сохранения, лидерборды,
 * а в перспективе realtime-мультиплеер через WebSocket.
 */
@SpringBootApplication
public class DungeonCrawlerApplication {
    public static void main(String[] args) {
        SpringApplication.run(DungeonCrawlerApplication.class, args);
    }
}
