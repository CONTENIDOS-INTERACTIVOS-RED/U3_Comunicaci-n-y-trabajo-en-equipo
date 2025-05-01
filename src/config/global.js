export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Motivación y orientación al cambio',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Teorías de la motivación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de motivación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Factores que influyen en la motivación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Etapas en el proceso de cambio',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Teorías de la motivación',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de motivación y estándares de eficacia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Motivación intrínseca/extrínseca',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Motivación biológica',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Motivación social',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Motivación al logro',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Eficacia',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Habilidades personales y sociales necesarias para la motivación al cambio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Autoconocimiento, autoconciencia y autodisciplina',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Gestión emocional',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Comunicación asertiva',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Empatía y red de apoyo',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Gallardo Vázquez, P. y Camacho Herrera, J. M. (2016). La motivación y el aprendizaje en educación: ( ed.). Sevilla, Spain: Wanceulen Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/33740?page=10',
    },
    {
      referencia:
        'Palmero Cantero, F. Gómez Íñiguez, C. y Guerrero Rodríguez, C. (2016). Manual de prácticas de motivación y emoción: ( ed.). Castelló de la Plana, Spain: Universitat Jaume I. Servei de Comunicació i Publicacions.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/51672?page=17',
    },
    {
      referencia:
        'Aguado, L. (2015). Emoción, afecto y motivación: un enfoque de procesos: ( ed.). Madrid, Mexico: Difusora Larousse - Alianza Editorial.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/45414?page=279',
    },
    {
      referencia:
        'Fernández Azcorta, E. J. Sáenz-López Buñuel. (2016). Motivación, inteligencia emocional y actividad física en universitarios: ( ed.). Huelva, Spain: Universidad de Huelva.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/44742?page=34',
    },
    {
      referencia:
        'Ramos Ramos, P. (Coord.) (2017). Inteligencia emocional: control del estrés: (3 ed.). Málaga, Editorial ICB.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/106679?page=45',
    },
    {
      referencia:
        'Gonzalez Molina, M. G. (Il.) y Calixto Sandoval, N. P. (Il.) (2024). Desarrolla tus habilidades y potencia tu vida: (1 ed.). Bogotá, Editorial Politécnico Grancolombiano.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/279920?page=10',
    },
  ],
  glosario: [
    {
      termino: 'Autoconfianza',
      significado:
        'Creencia en las propias capacidades y habilidades, fundamental para enfrentar cambios y persistir en la consecución de objetivos.',
    },
    {
      termino: 'Autoeficacia',
      significado:
        'Creencia en la capacidad propia para realizar acciones necesarias para alcanzar metas, concepto desarrollado por Albert Bandura.',
    },
    {
      termino: 'Apoyo social',
      significado:
        'Influencia positiva de amigos, familiares y colegas en la disposición de una persona para aceptar y gestionar el cambio.',
    },
    {
      termino: 'Cambio',
      significado:
        'Proceso de transformación en la vida personal, profesional o social que requiere adaptabilidad y puede conllevar desafíos.',
    },
    {
      termino: 'Contemplación',
      significado:
        'Segunda etapa donde la persona reconoce la necesidad de cambio y busca información.',
    },
    {
      termino: 'Comunicación asertiva',
      significado:
        'Habilidad para expresar pensamientos y necesidades de manera clara y respetuosa, fundamental para mantener relaciones saludables durante el proceso de cambio.',
    },
    {
      termino: 'Expectativa',
      significado:
        'Creencia de que el esfuerzo conducirá a un rendimiento satisfactorio.',
    },
    {
      termino: 'Factores motivacionales',
      significado:
        'Elementos que fomentan un alto nivel de compromiso y rendimiento, como el reconocimiento y la realización personal.',
    },
    {
      termino: 'Factores higiénicos',
      significado:
        'Aspectos necesarios para evitar la insatisfacción, como el salario y las condiciones laborales.',
    },
    {
      termino: 'Inteligencia emocional',
      significado:
        'Capacidad de reconocer y manejar las propias emociones y las de los demás, esencial para la gestión emocional en el cambio.',
    },
    {
      termino: 'Metas SMART',
      significado:
        'Objetivos que son Específicos, Medibles, Alcanzables, Relevantes y Temporales, utilizados para fomentar la motivación y la claridad en el proceso de cambio.',
    },
    {
      termino: 'Motivación intrínseca',
      significado:
        'Tipo de motivación que surge del interior del individuo, impulsada por el interés personal, la curiosidad o la satisfacción de realizar una actividad.',
    },
    {
      termino: 'Motivación extrínseca',
      significado:
        'Motivación que proviene de factores externos, como recompensas o reconocimiento social.',
    },
    {
      termino: 'Necesidades fisiológicas',
      significado:
        'Requerimientos básicos para la supervivencia, como alimentación y agua.',
    },
    {
      termino: 'Necesidades de amor y pertenencia',
      significado:
        'Impulso a establecer relaciones interpersonales y búsqueda de aceptación social.',
    },
    {
      termino: 'Necesidades de seguridad',
      significado:
        'Necesidades relacionadas con la estabilidad física y emocional, como un empleo seguro.',
    },
    {
      termino: 'Preparación',
      significado:
        'Tercera etapa donde se planifica y se establecen metas concretas para el cambio.',
    },
    {
      termino: 'Resiliencia',
      significado:
        'Capacidad de adaptarse positivamente ante la adversidad y mantener el esfuerzo frente a los obstáculos.',
    },
    {
      termino: 'Teoría del cambio de comportamiento',
      significado:
        'Modelo desarrollado por Prochaska y DiClemente que describe las etapas por las que las personas pasan al enfrentar un cambio.',
    },
    {
      termino: 'Teoría de la jerarquía de necesidades',
      significado:
        'Propuesta de Abraham Maslow que clasifica las necesidades humanas en una pirámide, desde las fisiológicas hasta la autorrealización.',
    },
  ],
}
