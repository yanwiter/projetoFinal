package com.luxury.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luxury.domain.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer>{

}
