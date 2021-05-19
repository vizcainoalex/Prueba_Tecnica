package com.local.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.local.demo.entity.PersonasEntity;

@Repository
public interface PersonaRepository extends JpaRepository<PersonasEntity, Integer> {

}
