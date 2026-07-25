package com.dungeoncrawler.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class SaveGame {
    @Id
    @GeneratedValue
    private Long id;
    private Long userId;
    private String payloadJson; // сериализованное состояние по save-format.json

    // getters/setters
}
