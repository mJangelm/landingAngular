import { Component } from '@angular/core';
import { Iproyecto } from '../../interfaces/iproyecto';
import { ProyectoCardComponent } from '../proyecto-card/proyecto-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone:true,
  imports: [ProyectoCardComponent, CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class Proyectos {

  proyectos: Iproyecto[] = [
    {
      id: 1,
      titulo: 'Open Talent',
      img: 'assets/img/proyectos/openTalent.png',
      tecnologias: 'Angular, MySql, Figma, Spring Boot, Bootstrap',
      descripcion: 'Aplicación grupal creada para la búsqueda de empresas de prácticas.',
      url: 'https://github.com/mJangelm/OpenTalent',
      urlYoutube: 'https://www.youtube.com/watch?v=hIITd6ICxjs'
    },
      {
    id: 8,
    titulo: 'Super Mario Phaser',
    img: 'assets/img/proyectos/supermario.png',
    tecnologias: 'JavaScript, Phaser',
    descripcion: 'Mini recreación del famoso clásico de la NES. Jugable en navegador con PC.',
    url: 'https://github.com/mJangelm/superMario',
    urlYoutube: 'https://mjangelm.github.io/superMario/'
  },
    {
      id: 2,
      titulo: 'Trivial en React',
      img: 'assets/img/proyectos/trivial.png',
      tecnologias: 'React, Vite, Styled Components',
      descripcion: 'Aplicación creada para comprender el funcionamiento de los Hooks en React. Correspondiente al curso de React de Píldoras Informáticas.',
      url: 'https://github.com/mJangelm/trivialReact',
      urlYoutube: 'https://trivialreactjarm.netlify.app/'
    },

    {
    id: 4,
    titulo: 'TalentHunt',
    tecnologias: 'Angular, MySql, Figma, Spring Boot, Bootstrap',
    descripcion: 'Este proyecto es una API RESTful desarrollada con Spring Boot 3, diseñada para gestionar un sistema de ofertas de empleo, empresas, usuarios y solicitudes. La aplicación sigue buenas prácticas de arquitectura, desacoplando capas mediante interfaces, servicios genéricos, DTOs, validaciones y manejo centralizado de errores.',
    url: 'https://github.com/mJangelm/vacantes_api',
    },

        {
    id: 5,
    titulo: 'Ahorcado',
    img: 'assets/img/proyectos/ahorcado.png',
    tecnologias: 'Angular',
    descripcion: 'Aplicación de Angular que simula el clásico juego del ahorcado.',
    url: 'https://github.com/mJangelm/ahorcado',
    urlYoutube: 'https://ahorcadojarm.netlify.app/'
    },

    {
    id: 6,
    titulo: 'Lista de productos',
    img: 'assets/img/proyectos/listadeproductos.png',
    tecnologias: 'Angular',
    descripcion: 'Aplicación de Angular que simula una lista de productos a través de una API',
    url: 'https://github.com/mJangelm/listaDeProductos',
    urlYoutube: 'https://listadeproductosjarm2025.netlify.app/'
    },

    {
    id: 7,
    titulo: 'Buscador de películas',
    img: 'assets/img/proyectos/buscador.png',
    tecnologias: 'JavaScript',
    descripcion: 'Pequeña aplicación de Javascript que simula ser un buscador de películas.',
    url: 'https://github.com/mJangelm/buscador2024',
    urlYoutube: 'https://mjangelm.github.io/buscador2024/'
  },
  
    {
    id: 9,
    titulo: 'Calculadora',
    img: 'assets/img/proyectos/calculadora.png',
    tecnologias: 'JavaScript',
    descripcion: 'Calculadora realizada en Javascript.',
    url: 'https://github.com/mJangelm/calculadora',
    urlYoutube: 'https://mjangelm.github.io/calculadora/'
  },

  ];
  proyecto! : Iproyecto;

}
