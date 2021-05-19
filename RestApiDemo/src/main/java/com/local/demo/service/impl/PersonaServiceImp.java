package com.local.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.local.demo.entity.PersonasEntity;
import com.local.demo.repository.PersonaRepository;
import com.local.demo.service.PersonasService;

@Service
public class PersonaServiceImp implements PersonasService{

	@Autowired
	private PersonaRepository personaRepository;
	
	public List<PersonasEntity> getPersonaService() {
		 return personaRepository.findAll();
	}

	@Override
	public String guardarService(PersonasEntity persona) {
		personaRepository.save(persona);
		return "OK";
	}

	@Override
	public List<PersonasEntity> actualizarProcesadoService(int[] ids) {
		List<PersonasEntity> hg = personaRepository.findAll();
		for (int i : ids) {
			for (PersonasEntity personasEntity : hg) {
				if(i == personasEntity.getId()) {
					personasEntity.setProcesado(true);
					personaRepository.save(personasEntity);
				}
			}
				
		}
		return hg;
		
	}
	
	
}
