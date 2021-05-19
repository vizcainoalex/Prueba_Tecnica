package com.local.demo.service;

import java.util.List;

import com.local.demo.entity.PersonasEntity;

public interface PersonasService {

	List<PersonasEntity> getPersonaService();
	String guardarService(PersonasEntity persona);
	List<PersonasEntity> actualizarProcesadoService(int[] ids);
}
