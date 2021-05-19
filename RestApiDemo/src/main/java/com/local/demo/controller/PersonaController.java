package com.local.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.local.demo.entity.PersonasEntity;
import com.local.demo.service.PersonasService;


@Controller
@RequestMapping(value = "/personas")
public class PersonaController {

	@Autowired
	private PersonasService personaService;

	@GetMapping()
	private @ResponseBody List<PersonasEntity> getPersonas() {
		return personaService.getPersonaService();
	}
	
	@PostMapping()
	private @ResponseBody String guardar(@RequestBody PersonasEntity pe ) {
		return personaService.guardarService(pe);
	}
	
	@PutMapping()
	private @ResponseBody List<PersonasEntity> actualizar(@RequestParam("ids") int[] ids ) {
		return personaService.actualizarProcesadoService(ids);
	}

}
