package com.dungeoncrawler.repository;

import com.dungeoncrawler.model.SaveGame;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaveGameRepository extends JpaRepository<SaveGame, Long> {
}
