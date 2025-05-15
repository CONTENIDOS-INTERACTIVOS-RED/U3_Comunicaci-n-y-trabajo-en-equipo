<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Teorías de la motivación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Para iniciar, hablar de motivación se entiende como un concepto multifacético que se refiere a los procesos que inician, guían y mantienen comportamientos orientados a objetivos. En el ámbito de la psicología, la motivación se ha estudiado extensamente por su papel crucial en la vida de los individuos. Se manifiesta en diversas formas, desde la búsqueda de satisfacción personal, hasta la necesidad de lograr metas profesionales. Durante este recorrido, se estudiará en profundidad qué es la motivación y cómo está interrelacionada para gestionar el cambio en los seres humanos.
        .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-8.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 El término motivación forma parte del lenguaje cotidiano y generalmente se emplea para referirse a los “motivos” o “razones” que explican el comportamiento propio y el de los demás. Desde luego, existen otros factores que pueden determinar el comportamiento humano: se realiza, en primer lugar, lo que se sabe hacer y también, lo que nos dejan hacer; incluso en ciertas ocasiones, se realiza lo que nos obligan a hacer. Sin embargo, es obvio que de entre aquellas cosas que sabemos y que nos dejan hacer, las que mejor hacemos son las que nosotros mismos “queremos realizar” (Gallardo. y Camacho, 2016). 
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Tipos de motivación

    p.mb-4 Sin duda su definición es bastante amplia y tiene varias características. Sin embargo, con el objetivo de aterrizar el concepto, se puede indicar que la motivación puede definirse como el conjunto de razones o impulsos que llevan a una persona a actuar de determinada manera.
    p.mb-4 Se puede clasificar en dos categorías principales: 

    ImagenInfografica.color-secundario.mb-0.bg-white
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-10.png', alt='Descripción de la imagen')
      .tarjeta.bg-white.p-4(x='10.3%' y='33.2%' numero='+')
        .h5.mb-2 Motivación intrínseca 
        p La motivación intrínseca surge del interior del individuo, impulsada por el interés personal, la curiosidad o la satisfacción que se obtiene de realizar una actividad.
      .tarjeta.bg-white.p-4(x='89.8%' y='58%' numero='+')
        .h5.mb-2 Motivación extrínseca
        p La motivación extrínseca proviene de factores externos, como recompensas tangibles, reconocimiento social o presión de otros. Sobre esto se profundizará más adelante. 

    .d-flex.align-items-start.bg-verde.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 100px' src='@/assets/curso/unidad/img-11.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0 La interacción entre estas dos formas de motivación es fundamental para comprender el comportamiento humano. Por ejemplo, un estudiante puede estar motivado intrínsecamente por el deseo de aprender, pero también puede verse impulsado por la expectativa de recibir buenas calificaciones. Esta dualidad resalta la complejidad de la motivación y su impacto en la toma de decisiones y la conducta.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 Factores que influyen en la motivación

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .bg-marron.p-4.mb-4
          span La motivación actúa como un catalizador que permite a las personas afrontar y gestionar el cambio, de manera efectiva. Cuando un individuo está motivado, es más probable que esté dispuesto a salir de su zona de confort, a asumir riesgos y a enfrentar la incertidumbre que acompaña a cualquier proceso de cambio. La motivación proporciona la energía necesaria para emprender acciones, superar obstáculos y persistir ante las dificultades.
        span Dado lo anterior, se puede indicar que existen varios factores que influyen en la motivación de una persona para aceptar y gestionar el cambio:

    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Establecimiento de metas claras y alcanzables
              p Cuando las personas tienen un objetivo definido, su motivación tiende a aumentar, dado que pueden visualizar el resultado deseado y el camino para lograrlo. La formulación de metas SMART (específicas, medibles, alcanzables, relevantes y temporales) es una herramienta eficaz para fomentar la motivación hacia el cambio.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Apoyo social
              p La influencia de amigos, familiares y colegas, puede ser determinante en la disposición de un individuo, para aceptar el cambio. Un entorno de apoyo donde se fomente la comunicación abierta y se celebren los logros, puede potenciar la motivación y facilitar el proceso de adaptación. Por el contrario, un entorno negativo o de resistencia, puede desmotivar e, incluso, paralizar los esfuerzos de cambio.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Autoconfianza
              p Juega un papel crucial en la motivación. Las personas que creen en sus capacidades y habilidades, son más propensas a enfrentar cambios y a perseverar en la búsqueda de sus objetivos. La autoeficacia, un concepto desarrollado por el psicólogo Albert Bandura, se refiere a la creencia en la capacidad propia para realizar acciones necesarias para alcanzar metas. Fomentar esta confianza es clave para impulsar la motivación hacia el cambio.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

    #t_1_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.3
        h2 Etapas en el proceso de cambio

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        p.mb-4 Dado que el proceso de cambio no es lineal, puede incluir etapas de resistencia y retrocesos. La motivación, en este contexto, actúa como un recurso que permite a las personas navegar por estas etapas con resiliencia. La teoría del cambio de comportamiento de Prochaska y DiClemente, conocida como el modelo de las etapas del cambio, sugiere que las personas pasan por diferentes etapas al enfrentar un cambio: precontemplación, contemplación, preparación, acción y mantenimiento. En cada una de estas etapas, la motivación puede variar y ser influenciada por diferentes factores.
        .row
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
          .col-12.col-xl-8
            SlyderF(columnas='col-12 col-lg-6 py-4 px-3')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-17.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Precontemplación
                p.px-1.text-small.mb-0.text-center Durante esta etapa, la persona puede no estar consciente de la necesidad de cambio. Aquí, la motivación puede surgir a través de la concienciación y la educación.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-18.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Contemplación
                p.px-1.text-small.mb-0.text-center En esta etapa, la persona comienza a reconocer la necesidad de cambio, y la motivación se orienta hacia la búsqueda de información y estrategias.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-67.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Preparación
                p.px-1.text-small.mb-0.text-center En la etapa de preparación, la motivación se traduce en la planificación y el establecimiento de metas concretas.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-68.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Acción
                p.px-1.text-small.mb-0.text-center Durante la etapa de la acción, la motivación se manifiesta en comportamientos tangibles.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-69.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Mantenimiento
                p.px-1.text-small.mb-0.text-center En la etapa de mantenimiento, la motivación se centra en la perseverancia y la adaptación.

    #t_1_4.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.4
        h2 Teorías de la motivación

    p.mb-4 Para profundizar en este amplio concepto, se iniciará realizando una explicación de las diferentes teorías, puesto que, a lo largo de la historia, diversas propuestas han buscado explicar el fenómeno de la motivación, aportando diferentes perspectivas sobre qué impulsa a los seres humanos a actuar. Estas teorías se pueden agrupar en varias corrientes, cada una de las cuales ha sido desarrollada por distintos autores a lo largo del tiempo.

    h2 a. Teoría del instinto

    .row.mb-4.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-azul.p-4(data-aos="fade-up")
        p.mb-0 En los inicios del estudio de la motivación, se encuentra la teoría del instinto propuesta por Sigmund Freud a finales del siglo XIX y principios del XX. Freud sugirió que los instintos biológicos, como el impulso sexual y la agresión, son fuerzas motivadoras fundamentales que impulsan el comportamiento humano. Su enfoque se centró en la idea de que los deseos inconscientes influyen en nuestras acciones.
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .d-flex.align-items-start.bg-amarillo-claro.p-4.pb-xl-0(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-0
          img.me-3(style='width: 100px' src='@/assets/curso/unidad/img-21.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 La teoría de la motivación de Sigmund Freud se fundamenta en su modelo psicoanalítico, en el que los instintos desempeñan un papel central en la comprensión del comportamiento humano. Según Freud, la motivación no solo proviene de necesidades biológicas básicas, sino que también está profundamente influenciada por procesos psicológicos complejos, en particular, por deseos inconscientes.
        .bg-amarillo.p-4
          span Freud propuso que los instintos son fuerzas motivacionales primarias y fundamentales, identificando principalmente dos tipos. El primero, Eros, conocido como el instinto de vida, se relaciona con la sexualidad, la preservación de la vida y la búsqueda de placer. Este instinto abarca no solo el impulso sexual, sino también la necesidad de amor, afecto y conexión social. 

    .row.bg-verde-oscuro.p-4.py-xl-0.mb-4
      .col-12.col-xl-10
        .my-auto.py-xl-4.text-white
          p.mb-4 En contraste, Thanatos, o el instinto de muerte, representa una tendencia hacia la agresión, la autodestrucción y la hostilidad.
          span Freud sostenía que este impulso puede manifestarse en comportamientos destructivos y en la agresividad, tanto hacia uno mismo como hacia los demás.
      .col-2.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-3.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
      .col-12.col-xl-9
        p.mb-4 Freud también destacó que gran parte de la motivación humana proviene de deseos y conflictos que no son accesibles a la conciencia. Los deseos reprimidos pueden influir en el comportamiento, de maneras que las personas no comprenden plenamente. La represión actúa como un mecanismo de defensa que mantiene estos deseos en el inconsciente, lo que puede dar lugar a síntomas neuróticos. La teoría freudiana también sostiene que los instintos pueden entrar en conflicto con las normas sociales y las expectativas morales, representadas por el superyó. Estos conflictos pueden manifestarse en ansiedad y malestar, llevando a las personas a buscar formas de resolver o aliviar esa tensión.
        .bg-amarillo-claro.p-4
          span Para sobrellevar estos conflictos, Freud identificó varios mecanismos de defensa, como la represión, la proyección y la sublimación. Estos mecanismos permiten a los individuos manejar sus deseos inconscientes, de manera que sean socialmente aceptables o menos amenazantes.

    p.mb-4 La teoría de Freud tiene importantes implicaciones en la comprensión del comportamiento humano. Sugiere que la motivación es mucho más compleja de lo que parece, porque las acciones de las personas pueden estar influenciadas por deseos ocultos y conflictos internos, lo que implica que no siempre actúan de manera consciente y racional. Asimismo, esta teoría ha sido fundamental en el desarrollo de la psicoterapia, donde, a través del análisis de los sueños, la asociación libre y la interpretación de los síntomas, los terapeutas pueden ayudar a los pacientes a explorar sus deseos inconscientes y resolver conflictos internos.

    .row.mb-4
      .col-12.col-xl-8
        .d-flex.align-items-start.bg-azul.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-24.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 A pesar de su impacto significativo en la psicología y la comprensión de la motivación, la teoría de Freud ha sido objeto de críticas. Algunos argumentan que su enfoque es demasiado determinista y que subestima el papel de la cognición consciente y el contexto social en la motivación. Además, ciertos conceptos, como el de los instintos, han sido considerados obsoletos o difíciles de probar empíricamente.
        span La teoría de la motivación de Sigmund Freud, ofrece una perspectiva única sobre la naturaleza humana, resaltando la importancia de los instintos y los procesos inconscientes en el comportamiento. Aunque ha enfrentado críticas y ha evolucionado con el tiempo, su legado sigue influyendo en la psicología contemporánea, así como en la comprensión de la motivación, la emoción y los conflictos internos. La exploración de los aspectos inconscientes de la mente humana continúa siendo un área rica y fascinante para la investigación y la práctica psicológica.

      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')        
      
    h2 b. Teoría de la jerarquía de las necesidades

    p.mb-4 Continuando con este recorrido, sobre la década de 1940, Abraham Maslow introdujo su célebre teoría de la jerarquía de necesidades, probablemente la teoría más conocida y estudiada por muchos.

    .row.mb-4 
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .d-flex.align-items-start.bg-marron.p-4.pb-xl-0(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 100px' src='@/assets/curso/unidad/img-27.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Según Maslow, las necesidades humanas pueden clasificarse en una pirámide, comenzando por las necesidades fisiológicas básicas y ascendiendo hacia necesidades más complejas como la autoestima y la autorrealización. Esta teoría enfatiza que las personas son motivadas a satisfacer primero las necesidades más básicas, antes de poder abordar aquellas de orden superior.
        h2 Niveles de la pirámide de jerarquía de necesidades
        span La teoría de la jerarquía de necesidades de Abraham Maslow se ha consolidado como una de las contribuciones más influyentes en el ámbito de la psicología y la motivación humana. Para explorar en profundidad esta idea, es fundamental desglosar cada uno de los niveles de la pirámide, así como examinar la interrelación entre las distintas categorías de necesidades y su aplicación en diversos contextos, ya sea en el ámbito laboral, el educativo o el personal:
    
    .row.mb-4
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Necesidades fisiológicas")
            p En primer lugar, se encuentran las necesidades fisiológicas, las cuales representan los requerimientos más básicos y fundamentales para la supervivencia humana, tales como la alimentación, el agua, el refugio, el sueño y la reproducción. Maslow sostiene que estas necesidades deben ser satisfechas antes de que una persona pueda preocuparse por aquellas de niveles superiores. En el contexto laboral, esto se traduce en la importancia de recibir un salario justo y de contar con condiciones de trabajo seguras.
          .div(titulo="Seguridad física")
            p Una vez que se han satisfecho las necesidades fisiológicas, surge la búsqueda de seguridad y estabilidad, lo que constituye el siguiente nivel de la jerarquía. Este nivel incluye la seguridad física, la seguridad financiera, así como la salud y el bienestar general. En el entorno laboral, esto se manifiesta en la búsqueda de un empleo estable, beneficios de salud y un ambiente de trabajo seguro. La falta de seguridad en estos aspectos, puede dar lugar a altos niveles de estrés y ansiedad, impactando negativamente en el rendimiento y la motivación de los empleados.
          .div(titulo="Amor y pertenencia")
            p El tercer nivel se centra en las necesidades de amor y pertenencia, donde las personas buscan establecer relaciones interpersonales y obtener aceptación social. Esta necesidad abarca la búsqueda de amistad, intimidad y conexión emocional. En el ámbito laboral, la cultura organizacional y las relaciones entre compañeros de trabajo, resultan ser elementos fundamentales. Las empresas que promueven un ambiente de colaboración y apoyo, suelen contar con empleados más satisfechos y motivados.
          .div(titulo="Autoestima")
            p En cuanto a las necesidades de estima, estas se dividen en dos categorías: la estima por uno mismo, que incluye aspectos como la autoconfianza, el logro y la independencia, y el respeto por parte de los demás, que abarca el estatus, el reconocimiento y la atención. La satisfacción de estas necesidades es esencial para el desarrollo de una autoimagen positiva. En el contexto laboral, esto puede traducirse en el reconocimiento del desempeño, oportunidades de desarrollo profesional y la posibilidad de asumir responsabilidades.
          .div(titulo="Autorrealización")
            p Finalmente, el nivel más alto de la jerarquía es el de las necesidades de autorrealización, donde los individuos buscan alcanzar su máximo potencial y realizarse a sí mismos. Este nivel puede incluir la búsqueda de la creatividad, la resolución de problemas y la búsqueda de experiencias significativas. En el entorno laboral, es crucial ofrecer oportunidades para la innovación, la expresión creativa y el crecimiento personal, ya que estos factores son fundamentales para mantener la motivación de los empleados.
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
    
    .row.mb-4.bg-marron.bg-full-width.p-4.py-xl-0
      .col-2.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
      .col-12.col-xl-10
        .my-auto.py-xl-4.px-4.px-xl-0
          span A pesar de su amplia aceptación y aplicación, la teoría de Maslow ha enfrentado críticas. Algunos detractores argumentan que la jerarquía no necesariamente sigue un orden lineal, y que las personas pueden buscar satisfacer varias necesidades simultáneamente. Además, las diferencias culturales pueden influir en la priorización de estas necesidades; por ejemplo, en algunas culturas, las necesidades de pertenencia pueden ser consideradas más importantes que las de autorrealización.

    .row.mb-4 
      .col-12.col-xl-8
        .mb-4.bg-verde.p-4
          span Adicional cualquier conducta que lleva a cabo un organismo puede ser entendida como resultado de una necesidad. Sin cuestionar de plano esta última afirmación, desde un punto de vista teleológico, siempre es posible defender que cualquier conducta tiene como objetivo satisfacer alguna suerte de necesidad en un individuo, el problema deviene prácticamente irresoluble cuando se trata de discernir qué necesidades son las más centrales o primarias.
        span Además de este aspecto crucial, en segundo lugar, sigue habiendo cierta controversia respecto a si las necesidades hacen referencia a fuerzas internas del organismo, que lo activan para llevar a cabo una conducta, o más bien se trata de estímulos externos que llegan hasta un organismo, dando lugar a que este inicie una conducta concreta. En tercer lugar, tampoco se ha podido dilucidar cuáles son los criterios apropiados para identificar una necesidad, persistiendo la duda referida a si cualquier tipo de deseo que experimenta un individuo tiene que ser considerado como una necesidad, o si, más bien, solo tienen que recibir dicho rótulo algunos motivos especiales relacionados con la supervivencia y la salud (Palmero, Gómez y Guerrero, 2016).
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
    
    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-azul.p-4(data-aos="fade-up")
        p.mb-0 La teoría de Maslow tiene diversas aplicaciones prácticas. En el ámbito educativo, los educadores pueden utilizarla para crear un entorno de aprendizaje que satisfaga las necesidades de los estudiantes. En la psicología clínica, puede servir como una herramienta para ayudar a los terapeutas a comprender las motivaciones subyacentes de sus pacientes. En el ámbito empresarial, los líderes pueden emplear esta teoría para diseñar estrategias que fomenten un ambiente de trabajo motivador y comprometido.

    p.mb-4 Como se evidencia la teoría de la jerarquía de necesidades de Maslow proporciona un marco valioso para comprender las motivaciones humanas y su influencia en el comportamiento. Al comprender mejor estas necesidades, tanto los individuos como las organizaciones pueden trabajar en la creación de entornos que promuevan el bienestar y la realización personal.

    h2 c. Teoría de los dos factores
    p.mb-4 En contraposición a la visión de Maslow, Frederick Herzberg desarrolló en la década de 1950 la teoría de los dos factores, que distingue entre factores motivacionales y factores higiénicos en el lugar de trabajo. Herzberg argumentaba que ciertos factores, como el reconocimiento y la realización personal, son fundamentales para la satisfacción laboral, mientras que otros, como el salario y las condiciones de trabajo, son necesarios para evitar la insatisfacción, pero no necesariamente motivan a los empleados.

    .row.mb-4
      .col-10.col-lg-6.col-xl-4.mx-auto.bg-verde.p-4.d-flex(data-aos='fade-up')
        span Herzberg sostenía que los factores motivacionales, que él denominaba <b>"factores de satisfacción"</b>, son aquellos que fomentan un alto nivel de compromiso y rendimiento en los empleados. Estos incluyen el logro, el reconocimiento, la responsabilidad y el crecimiento profesional. La presencia de estos factores no solo aumenta la satisfacción laboral, sino que también puede llevar a una mayor productividad y a un sentido de realización personal.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
      .col-10.col-lg-6.col-xl-4.mx-auto.bg-naranja.p-4.d-flex(data-aos='fade-up')
        span Por otro lado, los factores higiénicos, como el salario, las políticas de la empresa, la supervisión y las condiciones laborales, son aspectos esenciales que, si no se gestionan adecuadamente, pueden generar descontento y desmotivación. Sin embargo, Herzberg enfatiza que la mera mejora de estos factores higiénicos no conduce a un aumento en la motivación; simplemente previene la insatisfacción.

    .row.bg-verde-oscuro.p-4.py-xl-0.mb-4
      .col-12.col-xl-7.d-flex
        p.my-auto.text-white Además, Herzberg propuso que, para lograr un ambiente de trabajo verdaderamente motivador, las organizaciones deben centrarse en mejorar los factores que generan satisfacción. Esto implica crear oportunidades para el desarrollo profesional, reconocer el esfuerzo y logros de los empleados, y fomentar un ambiente de trabajo que permita la autonomía y la innovación. Según su teoría, cuando los empleados experimentan estos factores motivacionales, no solo se sienten más satisfechos, sino que también están más dispuestos a contribuir activamente al éxito de la organización.
      .col-5.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')

    .row.mb-4 
      .col-3.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
      .col-12.col-xl-9
        p.mb-4 La teoría de los dos factores de Herzberg ha tenido un impacto significativo en la gestión de recursos humanos y en la manera en que las empresas diseñan sus políticas de motivación. En lugar de enfocarse únicamente en el salario y las compensaciones, las organizaciones han comenzado a reconocer la importancia de crear un entorno que promueva el desarrollo personal y profesional. 
        .d-flex.align-items-start.bg-marron.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-35.png', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Esta perspectiva ha llevado a muchas empresas a implementar programas de reconocimiento, oportunidades de formación y desarrollo, así como a fomentar una cultura organizacional que valore el bienestar de sus empleados.
        span Concluyendo la teoría de los dos factores de Herzberg proporciona un marco valioso para entender la complejidad de la motivación en el lugar de trabajo. A través de la distinción entre factores motivacionales y factores higiénicos, Herzberg ofrece una guía para que las organizaciones no solo eviten la insatisfacción, sino que también logren un compromiso real y duradero de sus empleados.

    h2 d. Teoría de la motivación y expectativa
    .row.mb-4 
      .col-12.col-xl-8
        p.mb-4 En los años 60, la teoría de la motivación y expectativa de Víctor Vroom aportó un enfoque diferente al definir la motivación en términos de la expectativa de los individuos de que sus esfuerzos conducirán a un desempeño exitoso y que esté, a su vez, resultará en recompensas deseadas. Vroom propuso que la motivación es el resultado de tres elementos: la expectativa, la instrumentalidad y el valor.
        .d-flex.align-items-start.bg-azul.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-36.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 La expectativa se refiere a la creencia de un individuo de que su esfuerzo conducirá a un rendimiento satisfactorio. Este concepto sugiere que, si una persona considera que su trabajo arduo tiene una alta probabilidad de dar resultados positivos, estará más motivada para esforzarse.
        span Por otro lado, la instrumentabilidad se centra en la percepción de que un rendimiento exitoso llevará a la obtención de recompensas. Este elemento destaca la importancia de que las personas reconozcan una conexión clara entre su desempeño y las recompensas que desean, ya sean tangibles, como un aumento salarial, o intangibles, como el reconocimiento y la satisfacción personal. Finalmente, el valor implica la importancia que el individuo otorga a las recompensas obtenidas. Si la recompensa es vista como valiosa, la motivación para alcanzar el rendimiento deseado aumenta.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')

    .d-flex.align-items-start.bg-verde.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 100px' src='@/assets/curso/unidad/img-38.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0 A través de estos tres componentes, Vroom no solo explicó cómo se forma la motivación, sino que también proporcionó un marco para entender cómo las expectativas y las creencias pueden influir en el comportamiento humano.

    .row.mb-4 
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 La teoría se convirtió en una herramienta valiosa para líderes y gerentes en diferentes contextos, debido a que les permitió diagnosticar y mejorar la motivación dentro de sus equipos. Al comprender que las personas son más propensas a esforzarse cuando creen que sus acciones tendrán un impacto directo en su éxito, los líderes pudieron diseñar estrategias que alinean las expectativas de sus empleados con los objetivos organizacionales.
        .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-40.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Con el paso del tiempo, la teoría de Vroom ha sido objeto de numerosos estudios que han confirmado su relevancia y aplicabilidad en diversos entornos laborales y educativos. Investigaciones posteriores han explorado cómo factores como la cultura organizacional, la personalidad y las circunstancias individuales pueden interactuar con estos tres elementos, enriqueciendo aún más el entendimiento de la motivación. 
    
    p.mb-4 Así, la obra de Vroom no solo ha influido en la psicología organizacional, sino que también ha dado pie a enfoques más integrales que consideran la complejidad del comportamiento humano en contextos de trabajo. Al final, su legado reside en la comprensión de que la motivación es un fenómeno dinámico, moldeado por las percepciones y expectativas de cada individuo.

    h2 e. Teoría de la autodeterminación 

    .row.bg-marron.p-4.py-xl-0.mb-4
      .col-12.col-xl-8.d-flex
        p.my-auto A medida que avanzaba el tiempo, la teoría de la autodeterminación comenzó a tomar forma en el ámbito de la psicología gracias a la labor de Edward Deci y Richard Ryan en los años 70. Estos investigadores, al observar el comportamiento humano en diversas circunstancias, concluyeron que la motivación no se encontraba únicamente en factores externos, como recompensas o castigos, sino que se sustentaba en necesidades psicológicas intrínsecas que son fundamentales para el bienestar y el crecimiento personal.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')

    p.mb-4 La teoría propone que existen tres necesidades básicas que son esenciales para la motivación humana: 

    .row.mb-4
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="La necesidad de autodeterminación")
            p Se refiere a la capacidad de los individuos para dirigir sus propias acciones y decisiones, lo que les permite experimentar una sensación de control sobre sus vidas. Deci y Ryan argumentaron que cuando las personas sienten que tienen la libertad de elegir, su motivación se incrementa significativamente. Esta autonomía no solo fomenta una mayor implicación en las actividades, sino que también se traduce en un mayor bienestar emocional.
          .div(titulo="La necesidad de competencia")
            p Se relaciona con el deseo de las personas de sentirse efectivas en sus interacciones con el entorno. Según la teoría, cuando los individuos se enfrentan a desafíos que son percibidos como alcanzables, experimentan una sensación de logro que potencia su motivación. Esta sensación de competencia es crucial, dado que al dominar habilidades y superar obstáculos, las personas no solo mejoran su rendimiento, sino que también fortalecen su autoestima y confianza.
          .div(titulo="La necesidad de relación")
            p Enfatiza la importancia de las conexiones sociales y el apoyo emocional en la vida de las personas. Deci y Ryan sostuvieron que las relaciones interpersonales son un pilar fundamental para el desarrollo humano. Cuando los individuos sienten que pertenecen a un grupo y son valorados por los demás, su motivación se ve reforzada. Este componente social no solo enriquece la experiencia personal, sino que también amplifica el sentido de propósito y satisfacción en las actividades que se realizan.

    .row.mb-4
      .col-12.col-xl-7
        p.mb-4 A lo largo de los años, la teoría de la autodeterminación ha sido objeto de numerosas investigaciones y aplicaciones prácticas en diversas áreas, incluyendo la educación, la psicología clínica y el ámbito laboral. Al comprender que la motivación se nutre de estas tres necesidades básicas, educadores y líderes han comenzado a diseñar entornos que fomentan la autonomía, la competencia y la conexión, generando así espacios en los que las personas pueden florecer.
        .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-43.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 En este contexto, la teoría de la autodeterminación no solo ha cambiado la manera en que se aborda la motivación, sino que también ha proporcionado un marco valioso para mejorar la calidad de vida de las personas en sus diversas facetas. 
      .col-5.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')

    h2 f. Teoría de la motivación intrínseca y extrínseca

    p.mb-4 Para finalizar el recorrido histórico, más recientemente, está la teoría de la motivación intrínseca y extrínseca, la cual ha cobrado relevancia. La teoría de la motivación intrínseca y extrínseca ha emergido como un pilar fundamental en la comprensión del comportamiento humano, marcando un hito en el estudio de la psicología y la educación. Esta teoría, que se ha ido desarrollando a lo largo de los años, permite discernir las diferentes fuerzas que impulsan a las personas a actuar y a comprometerse con diversas actividades, ya sean académicas, laborales o recreativas. En este contexto, es esencial profundizar en los conceptos de motivación intrínseca y extrínseca, así como en sus implicaciones prácticas.

    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Motivación intrínseca 
              p Se refiere a la energía interna que impulsa a una persona a llevar a cabo una tarea por el mero placer y satisfacción que esta le proporciona. Por ejemplo, un artista puede dedicarse a pintar no solo por la posibilidad de vender sus obras, sino porque el acto de crear es, en sí mismo, una fuente de alegría y realización personal. Este tipo de motivación está relacionado con el interés, la curiosidad y el deseo de superación, características que fomentan un aprendizaje profundo y duradero. La motivación intrínseca, por lo tanto, se asocia con un compromiso genuino y un enfoque en el proceso, más que en el resultado.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Motivación extrínseca
              p Se manifiesta a través de incentivos externos, tales como recompensas monetarias, reconocimiento social o la aprobación de los demás. Un empleado puede trabajar arduamente en su tarea no tanto por el disfrute que le proporciona, sino por la expectativa de recibir un aumento salarial o un ascenso. Aunque la motivación extrínseca puede ser efectiva en el corto plazo, su impacto tiende a ser menos sostenible que la motivación intrínseca. Esto se debe a que, una vez que se retiran las recompensas externas, la motivación para realizar la tarea puede disminuir significativamente.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-xl-8
        .bg-azul.p-4.mb-4
          span El análisis de estas dos formas de motivación ha llevado a educadores y líderes en el ámbito laboral a reconsiderar sus enfoques en el fomento del aprendizaje y el compromiso. Las instituciones educativas, por ejemplo, han comenzado a implementar estrategias que promueven la motivación intrínseca en sus estudiantes, como el aprendizaje basado en proyectos, que permite a los alumnos explorar sus intereses y desarrollar habilidades a través de experiencias significativas. De igual manera, en el entorno laboral, muchas empresas están adoptando modelos que priorizan el bienestar y la satisfacción de sus empleados, reconociendo que un equipo motivado intrínsecamente es más propenso a ser productivo y creativo.
        span Sin duda, la teoría de la motivación intrínseca y extrínseca proporciona un marco valioso para comprender las diferentes dinámicas que influyen en el comportamiento humano. La distinción entre ambas formas de motivación no solo enriquece el conocimiento en el ámbito psicológico, sino que también ofrece herramientas prácticas para mejorar la educación y la gestión en los lugares de trabajo. A medida que la sociedad avanza, es crucial seguir explorando y aplicando estos conceptos para potenciar el desarrollo personal y profesional de las personas.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')

    .row.bg-verde-oscuro.p-4.py-xl-0.mb-5
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .my-auto.py-xl-4.text-white
          p.mb-0 Como se evidencia a lo largo de la historia, diferentes autores y teorías han tratado de desentrañar los complejos mecanismos de la motivación. Desde los instintos propuestos por Freud hasta las teorías más contemporáneas que abordan la autodeterminación y la motivación intrínseca, cada enfoque ha contribuido a una comprensión más profunda de por qué las personas actúan como lo hacen, resaltando la riqueza y diversidad del estudio de la motivación humana, todos aportando diferentes conceptos que permiten entender la motivación y sus implicaciones en la vida del ser humano.
    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/79339?page=11") Herrera, D. (2013). Teorías contemporáneas de la motivación: una perspectiva aplicada: ( ed.). Fondo Editorial de la Pontificia Universidad Católica del Perú.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/kmUxRlQWFkI?si=sE9VoP_gYJnaDBSK") [Vídeo] Pena, F. (2020, 25 de marzo). Motivación. Teoría de las tres necesidades básicas de Atkinson y McClelland.
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

    p
    


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
