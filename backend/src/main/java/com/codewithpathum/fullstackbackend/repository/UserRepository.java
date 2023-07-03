package com.codewithpathum.fullstackbackend.repository;

import com.codewithpathum.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
