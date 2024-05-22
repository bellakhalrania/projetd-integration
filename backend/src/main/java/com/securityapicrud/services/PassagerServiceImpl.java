package com.securityapicrud.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.securityapicrud.entity.Passager;
import com.securityapicrud.repository.PassagerRepos;



@Service
public class PassagerServiceImpl implements PassagerService {

    @Autowired
    private PassagerRepos passagerRepository;

    @Override
    public Passager createPassager(Passager p) {
        return passagerRepository.save(p);
    }

    @Override
    public List<Passager> getAllPassagers() {
        return passagerRepository.findAll();
    }

    @Override
    public Passager getOnePassager(long id) {
        return passagerRepository.findById(id).orElse(null);
    }

    @Override
    public Passager savePassager(Passager p) {
        return passagerRepository.save(p);
    }

    @Override
    public Passager updatePassager(Passager p) {
        return passagerRepository.save(p);
    }

    @Override
    public void deletePassager(Passager p) {
        passagerRepository.delete(p);
    }

    @Override
    public void deletePassagerById(Long id) {
        passagerRepository.deleteById(id);
    }
}
