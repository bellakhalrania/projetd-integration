package com.securityapicrud.services;

import java.util.List;

import com.securityapicrud.entity.Passager;


public interface PassagerService {
    Passager createPassager(Passager p);
    List<Passager> getAllPassagers();
    Passager getOnePassager(long id);
    Passager savePassager(Passager p);
    Passager updatePassager(Passager p);
    void deletePassager(Passager p);
    void deletePassagerById(Long id);
}
