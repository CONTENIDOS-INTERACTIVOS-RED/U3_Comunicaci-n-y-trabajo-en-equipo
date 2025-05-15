<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Tipos de motivación y estándares de eficacia'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
      .row.mb-4.mx-0
        .col-12.col-xl-8.d-flex.align-items-center.bg-azul-1.p-4(data-aos="fade-up")
          p.mb-0 Como ya se ha evidenciado la motivación es un concepto que ha intrigado a psicólogos, educadores y líderes a lo largo de la historia. En su esencia, la motivación se refiere a los impulsos que dirigen el comportamiento humano hacia ciertos objetivos. Sin embargo, la motivación no es un fenómeno simple; se presenta en múltiples formas y está influenciada por una variedad de factores. Durante esta unidad, se explorarán los diferentes tipos de motivación, clasificándolos en motivación intrínseca, motivación extrínseca, motivación biológica, motivación social y motivación de logro, entre otras.
        .d-none.d-xl-block.col-4.px-0
          img.h-100(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')

      #t_2_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.1
          h2 Motivación intrínseca/extrínseca

      p.mb-4 Conozcamos estos dos tipos de motivación:

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Motivación intrínseca")
              p Se origina dentro del individuo. Se trata de la búsqueda de satisfacción personal y el deseo de realizar actividades por recibir placer al hacerlas. Por ejemplo, un estudiante que se sumerge en un libro por el interés genuino en el tema está experimentando motivación intrínseca. Esta forma de motivación está profundamente relacionada con la curiosidad, el interés y la autoconfianza.
            .div(titulo="Importancia")
              p La psicología positiva ha destacado la importancia de la motivación intrínseca en el aprendizaje y el crecimiento personal. Los investigadores han demostrado que cuando las personas están intrínsecamente motivadas, tienden a ser más creativas, persistentes y comprometidas. Este tipo de motivación es esencial en el ámbito educativo, puesto que fomenta un aprendizaje profundo y significativo. Un docente que fomente la curiosidad y el amor por el aprendizaje en sus alumnos está cultivando un entorno propicio para la motivación intrínseca.
            .div(titulo="Motivación extrínseca")
              p A diferencia de la motivación intrínseca, la motivación extrínseca proviene de factores externos. Se refiere a la búsqueda de recompensas o el deseo de evitar castigos. Por ejemplo, un empleado que trabaja duro para recibir un bono o reconocimiento está actuando bajo motivación extrínseca. Este tipo de motivación puede ser efectiva en ciertas circunstancias, pero a menudo se considera menos sostenible a largo plazo en comparación con la motivación intrínseca.
            .div(titulo="¿Cómo se manifiesta?")
              p La motivación extrínseca puede manifestarse en diversas formas, como recompensas materiales, elogios, calificaciones o incluso el reconocimiento social. Sin embargo, es importante señalar que una dependencia excesiva de la motivación extrínseca puede llevar a la desmotivación y al agotamiento. Cuando las recompensas externas se convierten en el único motor del comportamiento, la satisfacción personal y el sentido de logro pueden verse comprometidos.

      #t_2_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.2
          h2 Motivación biológica

      p.mb-4 La motivación biológica representa una de las formas más esenciales y primarias del impulso humano, ya que se basa en la satisfacción de necesidades fisiológicas fundamentales para la supervivencia.

      .row.bg-marron.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Motivación biológica
            p.mb-5(data-aos="fade-up") En el PDF Motivación biológica, se analiza cómo estas necesidades, como el hambre, la sed o el sueño, activan procesos internos que dirigen el comportamiento hacia la restauración del equilibrio corporal. Además, se profundiza en la manera en que estas formas de motivación influyen y, en muchos casos, predominan sobre otros tipos de motivación, configurando así la base sobre la cual se construyen niveles más complejos del accionar humano.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Motivación biológica.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Motivación biológica
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')

      #t_2_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.3
          h2 Motivación social

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 Para estudiar esta temática, lo invitamos a escuchar el siguiente podcast.
          TarjetaAudio.color-secundario.bg-white.mb-3(
            texto='Podcast Motivación social'
            tiempo
            :audio="require('../../assets/componentes/audios/Podcast Motivación social_mezcla.mp3')"
            @audio-hover='mostrarIndicadorTarjetaAudio = false'
          )
       
      #t_2_4.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.4
          h2 Motivación al logro

      p.mb-4 La motivación al logro constituye una de las fuerzas más potentes en la conducta humana, especialmente en contextos donde se requiere alcanzar metas y superar desafíos personales o profesionales.

      .row.bg-marron.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Motivación al logro
            p.mb-5(data-aos="fade-up") En el PDF Motivación al logro, se analiza este tipo de impulso interno que lleva a las personas a fijarse objetivos ambiciosos, perseverar frente a los obstáculos y buscar constantemente la excelencia. Además, se explora el aporte de teorías psicológicas como la de David McClelland, así como la relación entre esta motivación y habilidades clave como la autodisciplina, la autorregulación y la mentalidad de crecimiento, fundamentales para el éxito sostenido en entornos educativos, laborales y personales.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Motivación al logro.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Motivación al logro
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen') 

      #t_2_5.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.5
          h2 Eficacia

      p.mb-4 Ahora bien, es necesario exponer otro concepto clave durante esta revisión: <b>eficacia</b>. Existen varios aspectos claves que se consideran al evaluar la eficacia:

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Definir los objetivos
                p En primer lugar, es fundamental definir claramente los objetivos que se pretenden alcanzar. Sin una formulación precisa de estos objetivos, es difícil medir el éxito de cualquier intervención. Además, la claridad en los indicadores de éxito es esencial; estos indicadores deben ser específicos, medibles, alcanzables, relevantes y limitados en el tiempo (SMART).
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-54.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Contexto
                p Otro elemento importante es el contexto en el que se aplica la intervención. La eficacia puede variar significativamente, según factores como el entorno, los recursos disponibles y la población objetivo. Por lo tanto, es crucial realizar un análisis del contexto antes de implementar cualquier programa.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-55.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Recolección y análisis de datos
                p La recolección y el análisis de datos son pasos esenciales en la evaluación de la eficacia. Esto implica no solo recopilar información sobre los resultados, sino también analizar cómo estos resultados se relacionan con los objetivos establecidos. A menudo, se utilizan métodos cuantitativos y cualitativos para obtener una visión completa del impacto de la intervención.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-56.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Retroalimentación y mejora
                p Finalmente, la retroalimentación y la mejora continua son componentes vitales en la evaluación de la eficacia. Los resultados obtenidos deben ser utilizados para ajustar y mejorar los procesos o programas, asegurando así que se maximice su impacto. En resumen, los estándares de eficacia son herramientas fundamentales para garantizar que las intervenciones sean efectivas y cumplan con sus objetivos en un contexto dado.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-57.png', alt='Texto que describa la imagen')

      p.mb-4 Ahora es clave conectar dos conceptos, la eficacia y la motivación. Pues la motivación juega un papel crucial en el logro de la eficacia de cualquier proceso, programa o intervención, porque es el motor que impulsa a las personas a alcanzar objetivos y a superar desafíos. Al evaluar la eficacia a través de estándares claros, la motivación puede influir en cada etapa del proceso, desde la definición de objetivos hasta la implementación y la mejora continua. Conozcamos más al respecto:

      .row.mb-4
        .col-12.col-xl-7
          LineaTiempoD.color-secundario
            p(numero='1' titulo='Paso 1') La motivación está intrínsecamente relacionada con la claridad de los objetivos. Cuando los individuos comprenden y se sienten conectados con lo que se espera de ellos, su motivación para alcanzar esos objetivos se incrementa. Por ejemplo, en un programa de capacitación, si los participantes ven la relevancia de las metas establecidas y cómo estas se alinean con sus intereses y aspiraciones personales, su compromiso y esfuerzo para lograr esos objetivos aumentarán significativamente. 
            p(numero='2' titulo='Paso 2') La motivación es fundamental para la recolección y análisis de datos. Un equipo motivado es más propenso a dedicarse a la recopilación precisa de información y a la evaluación honesta de los resultados. Esto no solo mejora la calidad de los datos recolectados, sino que también fomenta un ambiente de trabajo colaborativo donde la retroalimentación se considera como una herramienta para el crecimiento, no como una crítica. La motivación, entonces, se convierte en un catalizador para el análisis crítico y constructivo, que es esencial para identificar áreas de mejora. 
            p(numero='3' titulo='Paso 3') El contexto en el que se implementa una intervención puede influir en la motivación de los involucrados. Un entorno que promueva la colaboración, la creatividad y el reconocimiento de logros tiende a generar un mayor nivel de motivación entre los participantes. Cuando las personas se sienten valoradas y apoyadas, son más propensas a contribuir activamente hacia el cumplimiento de los estándares de eficacia y a trabajar para mejorar los procesos existentes. 
        .col-5.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-58.png', alt='Texto que describa la imagen')

      .row.mb-5
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-59.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 Ahora, la mejora continua está estrechamente ligada a la motivación. Un equipo motivado no solo se esfuerza por cumplir con los objetivos establecidos, sino que también busca constantemente formas de superarlos. La retroalimentación y el aprendizaje de los resultados obtenidos son procesos que, cuando se manejan adecuadamente, pueden alimentar la motivación intrínseca, llevando a una cultura de mejora continua que no solo se enfoca en la eficacia, sino también en el desarrollo personal y profesional de cada individuo involucrado.
          .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-60.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0      Finalmente, la motivación no solo es un factor impulsor en la consecución de objetivos, sino que también es un elemento clave que puede hacer la diferencia en la evaluación de la eficacia de cualquier intervención. Cuando se cultiva un ambiente motivador, se crean las condiciones ideales para alcanzar los estándares de eficacia y maximizar el impacto de los programas y procesos implementados. 

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/226280?page=7") Ayala, J. C. (2022). Centennials: su motivación laboral: (1 ed.). Pluma Digital Ediciones.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=MZNLxxwD1QY") [Vídeo] Pena, F. (2020, 26 de marzo). Tipos de motivación: Extrínseca e intrínseca.
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      p
      

  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
