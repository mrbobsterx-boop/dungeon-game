package com.dungeoncrawler.repository;

import com.dungeoncrawler.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
