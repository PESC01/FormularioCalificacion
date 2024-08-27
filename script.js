<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Formulario de Calificación</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <h1>Formulario de Calificación</h1>
      <h2>AREA # 7. INVESTIGACIÓN E INTERACCIÓN SOCIAL:</h2>
      <form id="quizForm">
        <div id="group1" class="question-group">
          <h2>7. Políticas de investigación y desarrollo tecnológico</h2>
          <h3>
            7.1.1. La Carrera debe tener políticas claras sobre líneas de
            investigación y desarrollo tecnológico a desarrollarse en cada
            gestión académica.
          </h3>
          <div class="question">
            <p>
              Revisión y verificación de la existencia de políticas claras sobre
              líneas de investigación y desarrollo tecnológico a desarrollarse
              en cada gestión académica.
            </p>
            <label
              >Existencia:
              <select name="existencia1">
                <option value="1">No tiene</option>
                <option value="2">En proceso de aprobación</option>
                <option value="3">Tiene políticas definidas y aprobadas</option>
                <option value="4">
                  Tiene políticas aprobadas en ejecución parcial
                </option>
                <option value="5">
                  Tiene políticas aprobadas y en plena ejecución
                </option>
              </select>
            </label>
            <label
              >Eficiencia:
              <select name="eficiencia1">
                <option value="1">No se logra los propósitos</option>
                <option value="2">
                  Se logra deficientemente los propósitos
                </option>
                <option value="3">Se logra parcialmente los propósitos</option>
                <option value="4">
                  Se logra satisfactoriamente algunos propósitos
                </option>
                <option value="5">
                  Se logra satisfactoriamente todos los propósitos
                </option>
              </select>
            </label>
          </div>

          <div class="question">
            <p>
              Establecer un equipo multidisciplinario a fin de analizar
              investigación y desarrollo tecnológico a desarrollarse. Se
              deberían fijar metas y tiempos para efectuar permanentes
              revisiones, mejoras o ajustes y generación de políticas que
              incentiven la investigación.
            </p>
            <label
              >Existencia:
              <select name="existencia2">
                <option value="1">No tiene</option>
                <option value="2">En proceso de aprobación</option>
                <option value="3">Tiene políticas definidas y aprobadas</option>
                <option value="4">
                  Tiene políticas aprobadas en ejecución parcial
                </option>
                <option value="5">
                  Tiene políticas aprobadas y en plena ejecución
                </option>
              </select>
            </label>
            <label
              >Eficiencia:
              <select name="eficiencia2">
                <option value="1">No se logra los propósitos</option>
                <option value="2">
                  Se logra deficientemente los propósitos
                </option>
                <option value="3">Se logra parcialmente los propósitos</option>
                <option value="4">
                  Se logra satisfactoriamente algunos propósitos
                </option>
                <option value="5">
                  Se logra satisfactoriamente todos los propósitos
                </option>
              </select>
            </label>
          </div>

          <div class="question">
            <p>
              Es muy importante, la divulgación de las políticas de
              investigación y los beneficios para quienes la lleven a efecto a
              través de ayudas audio - visuales como afiches, panfletos,
              trípticos, etc. Así mismo es muy importante utilizar las ciber
              herramientas que existen actualmente.
            </p>
            <label
              >Existencia:
              <select name="existencia3">
                <option value="1">No tiene</option>
                <option value="2">En proceso de aprobación</option>
                <option value="3">Tiene políticas definidas y aprobadas</option>
                <option value="4">
                  Tiene políticas aprobadas en ejecución parcial
                </option>
                <option value="5">
                  Tiene políticas aprobadas y en plena ejecución
                </option>
              </select>
            </label>
            <label
              >Eficiencia:
              <select name="eficiencia3">
                <option value="1">No se logra los propósitos</option>
                <option value="2">
                  Se logra deficientemente los propósitos
                </option>
                <option value="3">Se logra parcialmente los propósitos</option>
                <option value="4">
                  Se logra satisfactoriamente algunos propósitos
                </option>
                <option value="5">
                  Se logra satisfactoriamente todos los propósitos
                </option>
              </select>
            </label>
          </div>

          <div class="question">
            <p>
              Verificar a través de encuestas la comprensión de la existencia de
              políticas claras sobre líneas de investigación y desarrollo
              tecnológico.
            </p>
            <label
              >Existencia:
              <select name="existencia4">
                <option value="1">No tiene</option>
                <option value="2">En proceso de aprobación</option>
                <option value="3">Tiene políticas definidas y aprobadas</option>
                <option value="4">
                  Tiene políticas aprobadas en ejecución parcial
                </option>
                <option value="5">
                  Tiene políticas aprobadas y en plena ejecución
                </option>
              </select>
            </label>
            <label
              >Eficiencia:
              <select name="eficiencia4">
                <option value="1">No se logra los propósitos</option>
                <option value="2">
                  Se logra deficientemente los propósitos
                </option>
                <option value="3">Se logra parcialmente los propósitos</option>
                <option value="4">
                  Se logra satisfactoriamente algunos propósitos
                </option>
                <option value="5">
                  Se logra satisfactoriamente todos los propósitos
                </option>
              </select>
            </label>
          </div>

          <button type="button" onclick="calculateGroupAverage('group1')">
            Calcular Promedio
          </button>
          <canvas id="chart1"></canvas>
        </div>

        <div id="group2" class="question-group">
          <h2>7.2. Participación de docentes y estudiantes</h2>
          <h3>
            7.2.1. Los docentes y estudiantes deben participar activamente en
            los procesos de investigación e interacción social.
          </h3>
          <div class="question">
            <p>
              Revisión y verificación de la existencia de participación en los
              procesos de investigación y desarrollo tecnológico a desarrollarse
              en cada gestión académica.
            </p>
            <label
              >Para docentes:
              <select name="existencia5">
                <option value="1">No tienen participación</option>
                <option value="2">Tienen muy poca participación</option>
                <option value="3">Participan parcialmente</option>
                <option value="4">Participan aceptablemente</option>
                <option value="5">Participación eficiente</option>
              </select>
            </label>
            <label
              >Para estudiantes:
              <select name="eficiencia5">
                <option value="1">No tienen participación</option>
                <option value="2">Tienen muy poca participación</option>
                <option value="3">Participan parcialmente</option>
                <option value="4">Participan aceptablemente</option>
                <option value="5">Participación eficiente</option>
              </select>
            </label>
          </div>
          <div class="question">
            <p>
              Establecer un equipo multidisciplinario a fin de analizar cuál es
              el grado de participación en los esfuerzos de investigación y
              desarrollo tecnológico. Se deberían fijar metas y tiempos para
              efectuar permanentes revisiones, mejoras o ajustes y generación de
              políticas que incentiven la participación en la investigación.
            </p>
            <label
              >Para docentes:
              <select name="existencia6">
                <option value="1">No tienen participación</option>
                <option value="2">Tienen muy poca participación</option>
                <option value="3">Participan parcialmente</option>
                <option value="4">Participan aceptablemente</option>
                <option value="5">Participación eficiente</option>
              </select>
            </label>
            <label
              >Para estudiantes:
              <select name="eficiencia6">
                <option value="1">No tienen participación</option>
                <option value="2">Tienen muy poca participación</option>
                <option value="3">Participan parcialmente</option>
                <option value="4">Participan aceptablemente</option>
                <option value="5">Participación eficiente</option>
              </select>
            </label>
          </div>
          <div class="question">
            <p>
              Es muy importante, la divulgación de las políticas que incentiven
              la participación en investigación a través de ayudas audio -
              visuales como afiches, panfletos, trípticos, etc. Así mismo es muy
              importante utilizar las ciber herramientas que existen
              actualmente.
            </p>
            <label
              >Para docentes:
              <select name="existencia7">
                <option value="1">No tienen participación</option>
                <option value="2">Tienen muy poca participación</option>
                <option value="3">Participan parcialmente</option>
                <option value="4">Participan aceptablemente</option>
                <option value="5">Participación eficiente</option>
              </select>
            </label>
            <label
              >Para estudiantes:
              <select name="eficiencia7">
                <option value="1">No tienen participación</option>
                <option value="2">Tienen muy poca participación</option>
                <option value="3">Participan parcialmente</option>
                <option value="4">Participan aceptablemente</option>
                <option value="5">Participación eficiente</option>
              </select>
            </label>
          </div>
          <div class="question">
            <p>
              Verificar a través de encuestas la comprensión de los beneficios
              de participar en investigación.
            </p>
            <label
              >Para docentes:
              <select name="existencia8">
                <option value="1">No tienen participación</option>
                <option value="2">Tienen muy poca participación</option>
                <option value="3">Participan parcialmente</option>
                <option value="4">Participan aceptablemente</option>
                <option value="5">Participación eficiente</option>
              </select>
            </label>
            <label
              >Para estudiantes:
              <select name="eficiencia8">
                <option value="1">No tienen participación</option>
                <option value="2">Tienen muy poca participación</option>
                <option value="3">Participan parcialmente</option>
                <option value="4">Participan aceptablemente</option>
                <option value="5">Participación eficiente</option>
              </select>
            </label>
          </div>

          <button type="button" onclick="calculateGroupAverage('group2')">
            Calcular Promedio
          </button>
          <canvas id="chart2"></canvas>
        </div>

        <div id="group3" class="question-group">
          <h2>7.3. Trabajos de investigación</h2>
          <h3>
            7.3.1. Se debe demostrar que los trabajos de grado fueron parte de
            las tareas de investigación e interacción social al menos en 20%.
          </h3>
          <div class="question">
            <p>
              Revisión y verificación del porcentaje en el que los trabajos de
              grado fueron parte de las tareas de investigación e interacción
              social.
            </p>
            <label
              >Criterios de evaluación:
              <select name="existencia9">
                <option value="1">
                  Los trabajos de grado no son parte de las tareas de
                  investigación
                </option>
                <option value="2">Forman parte en menos del 20%</option>
                <option value="3">Forman parte de 20% a 30%</option>
                <option value="4">Forman parte de 30% a 50%</option>
                <option value="5">Forman parte en más del 50%</option>
              </select>
            </label>
          </div>

          <div class="question">
            <p>
              Establecer un equipo multidisciplinario a fin de analizar cuál es
              el porcentaje de relación entre la investigación y trabajos de
              grado. Se deberían fijar metas y tiempos para efectuar permanentes
              revisiones, mejoras o ajustes a la inclusión de la investigación
              dentro de los trabajos de grado.
            </p>
            <label
              >Criterios de evaluación:
              <select name="existencia10">
                <option value="1">
                  Los trabajos de grado no son parte de las tareas de
                  investigación
                </option>
                <option value="2">Forman parte en menos del 20%</option>
                <option value="3">Forman parte de 20% a 30%</option>
                <option value="4">Forman parte de 30% a 50%</option>
                <option value="5">Forman parte en más del 50%</option>
              </select>
            </label>
          </div>
          <div class="question">
            <p>
              Es muy importante, la divulgación de las políticas que incentiven
              la inclusión de la investigación dentro de los trabajos de grado a
              través de ayudas audio - visuales como afiches, panfletos,
              trípticos, etc. Así mismo es muy importante utilizar las ciber
              herramientas que existen actualmente.
            </p>
            <label
              >Criterios de evaluación:
              <select name="existencia11">
                <option value="1">
                  Los trabajos de grado no son parte de las tareas de
                  investigación
                </option>
                <option value="2">Forman parte en menos del 20%</option>
                <option value="3">Forman parte de 20% a 30%</option>
                <option value="4">Forman parte de 30% a 50%</option>
                <option value="5">Forman parte en más del 50%</option>
              </select>
            </label>
          </div>
          <div class="question">
            <p>
              Verificar a través de encuestas la comprensión de la necesidad y
              ventajas de incluir la investigación dentro de los trabajos de
              grado.
            </p>
            <label
              >Criterios de evaluación:
              <select name="existencia12">
                <option value="1">
                  Los trabajos de grado no son parte de las tareas de
                  investigación
                </option>
                <option value="2">Forman parte en menos del 20%</option>
                <option value="3">Forman parte de 20% a 30%</option>
                <option value="4">Forman parte de 30% a 50%</option>
                <option value="5">Forman parte en más del 50%</option>
              </select>
            </label>
          </div>

          <button type="button" onclick="calculateGroupAverage('group3')">
            Calcular Promedio Grupo 3
          </button>
          <canvas id="chart3"></canvas>
        </div>

        <div id="group4" class="question-group">
          <h2>7.4. Políticas de Interacción Social</h2>
          <h3>
            7.4.1. Se debe contar con actividades formales de vinculación con
            los sectores social y productivo.
          </h3>
          <div class="question">
            <p>
              Revisión y verificación del vínculo con la sociedad, a través de
              convenios concretos con el sector social y en el sector
              productivo.
            </p>
            <label
              >para vínculos con el sector social:
              <select name="existencia13">
                <option value="1">No tienen vínculos</option>
                <option value="2">Muy poca vinculación</option>
                <option value="3">Vinculación parcial</option>
                <option value="4">Vinculación aceptable</option>
                <option value="5">Vinculación eficiente</option>
              </select>
            </label>
            <label
              >para vínculos con el sector productivo:
              <select name="eficiencia13">
                <option value="1">No tienen vínculos</option>
                <option value="2">Muy poca vinculación</option>
                <option value="3">Vinculación parcial</option>
                <option value="4">Vinculación aceptable</option>
                <option value="5">Vinculación eficiente</option>
              </select>
            </label>
          </div>
          <div class="question">
            <p>
              Establecer un equipo multidisciplinario a fin de analizar el
              actual vínculo con la sociedad. Se deberían fijar metas y tiempos
              para efectuar permanentes revisiones, mejoras o ajustes para
              incrementar el vínculo con la sociedad, a través de convenios
              concretos.
            </p>
            <label
              >para vínculos con el sector social:
              <select name="existencia14">
                <option value="1">No tienen vínculos</option>
                <option value="2">Muy poca vinculación</option>
                <option value="3">Vinculación parcial</option>
                <option value="4">Vinculación aceptable</option>
                <option value="5">Vinculación eficiente</option>
              </select>
            </label>
            <label
              >para vínculos con el sector productivo:
              <select name="eficiencia14">
                <option value="1">No tienen vínculos</option>
                <option value="2">Muy poca vinculación</option>
                <option value="3">Vinculación parcial</option>
                <option value="4">Vinculación aceptable</option>
                <option value="5">Vinculación eficiente</option>
              </select>
            </label>
          </div>
          <div class="question">
            <p>
              Es muy importante, la divulgación de las políticas que incentiven
              el vínculo con la sociedad, a través de convenios concretos con el
              sector social y en el sector productivo a través de ayudas audio -
              visuales como afiches, panfletos, trípticos, etc. Así mismo es muy
              importante utilizar las ciber herramientas que existen actualmente
            </p>
            <label
              >para vínculos con el sector social:
              <select name="existencia15">
                <option value="1">No tienen vínculos</option>
                <option value="2">Muy poca vinculación</option>
                <option value="3">Vinculación parcial</option>
                <option value="4">Vinculación aceptable</option>
                <option value="5">Vinculación eficiente</option>
              </select>
            </label>
            <label
              >para vínculos con el sector productivo:
              <select name="eficiencia15">
                <option value="1">No tienen vínculos</option>
                <option value="2">Muy poca vinculación</option>
                <option value="3">Vinculación parcial</option>
                <option value="4">Vinculación aceptable</option>
                <option value="5">Vinculación eficiente</option>
              </select>
            </label>
          </div>
          <div class="question">
            <p>
              Verificar a través de encuestas la comprensión del vínculo
              sociedad - universidad.
            </p>
            <label
              >para vínculos con el sector social:
              <select name="existencia16">
                <option value="1">No tienen vínculos</option>
                <option value="2">Muy poca vinculación</option>
                <option value="3">Vinculación parcial</option>
                <option value="4">Vinculación aceptable</option>
                <option value="5">Vinculación eficiente</option>
              </select>
            </label>
            <label
              >para vínculos con el sector productivo:
              <select name="eficiencia16">
                <option value="1">No tienen vínculos</option>
                <option value="2">Muy poca vinculación</option>
                <option value="3">Vinculación parcial</option>
                <option value="4">Vinculación aceptable</option>
                <option value="5">Vinculación eficiente</option>
              </select>
            </label>
          </div>
          <h3>
            7.4.2. Se debe demostrar resultados positivos de las actividades de
            interacción social; socialización de acciones comunitarias,
            campañas, servicios y otras.
          </h3>

          <div class="question">
            <p>
              Revisión y verificación de la existencia de resultados positivos
              de las actividades de interacción social; socialización de
              acciones comunitarias, campañas, servicios y otras.
            </p>
            <label
              >Criterios de evaluación:
              <select name="existencia17">
                <option value="1">No tiene</option>
                <option value="2">Se tiene resultados poco positivos</option>
                <option value="3">Se tiene resultados positivos</option>
                <option value="4">
                  Se tiene resultados altamente positivos
                </option>
                <option value="5">
                  Se tiene resultados altamente positivos y de alto impacto
                </option>
              </select>
            </label>
          </div>

          <div class="question">
            <p>
              Establecer un equipo multidisciplinario a fin de analizar la
              existencia de resultados positivos de las actividades de
              interacción con la sociedad. Se deberían fijar metas y tiempos
              para efectuar permanentes revisiones, mejoras o ajustes para
              incrementar la interacción con la sociedad.
            </p>
            <label
              >Criterios de evaluación:
              <select name="existencia18">
                <option value="1">No tiene</option>
                <option value="2">Se tiene resultados poco positivos</option>
                <option value="3">Se tiene resultados positivos</option>
                <option value="4">
                  Se tiene resultados altamente positivos
                </option>
                <option value="5">
                  Se tiene resultados altamente positivos y de alto impacto
                </option>
              </select>
            </label>
          </div>

          <div class="question">
            <p>
              Es muy importante, la divulgación de resultados positivos de las
              actividades de interacción social a través de ayudas audio -
              visuales como afiches, panfletos, trípticos, etc. Así mismo es muy
              importante utilizar las ciber herramientas que existen
              actualmente.
            </p>
            <label
              >Criterios de evaluación:
              <select name="existencia19">
                <option value="1">No tiene</option>
                <option value="2">Se tiene resultados poco positivos</option>
                <option value="3">Se tiene resultados positivos</option>
                <option value="4">
                  Se tiene resultados altamente positivos
                </option>
                <option value="5">
                  Se tiene resultados altamente positivos y de alto impacto
                </option>
              </select>
            </label>
          </div>

          <div class="question">
            <p>
              Verificar a través de encuestas el conocimiento sobre los
              resultados positivos con la sociedad.
            </p>
            <label
              >Criterios de evaluación:
              <select name="existencia20">
                <option value="1">No tiene</option>
                <option value="2">Se tiene resultados poco positivos</option>
                <option value="3">Se tiene resultados positivos</option>
                <option value="4">
                  Se tiene resultados altamente positivos
                </option>
                <option value="5">
                  Se tiene resultados altamente positivos y de alto impacto
                </option>
              </select>
            </label>
          </div>

          <div class="question">
            <p>
              Revisión y verificación de la existencia de resultados positivos
              de las actividades de interacción social; socialización de
              acciones comunitarias, campañas, servicios y otras.
            </p>
            <label
              >Criterios de evaluación:
              <select name="existencia17">
                <option value="1">No tiene</option>
                <option value="2">Se tiene resultados poco positivos</option>
                <option value="3">Se tiene resultados positivos</option>
                <option value="4">
                  Se tiene resultados altamente positivos
                </option>
                <option value="5">
                  Se tiene resultados altamente positivos y de alto impacto
                </option>
              </select>
            </label>
          </div>

          <button type="button" onclick="calculateGroupAverage('group4')">
            Calcular Promedio Grupo 4
          </button>
          <canvas id="chart4"></canvas>
        </div>

        <div id="group5" class="question-group">
          <h2>7.5. Proyectos de investigación.</h2>
          <h3>
            7.5.1. Se debe demostrar la existencia de resultados favorables de
            proyectos de investigación transferidos al sector productivo.
          </h3>
          <div class="question">
            <p>
              Revisión y verificación de la existencia de resultados favorables
              de proyectos de investigación transferidos al sector productivo.
            </p>
            <label
              >Criterios de evaluación:
              <select name="existencia21">
                <option value="1">No tiene</option>
                <option value="2">
                  Resultados de investigación poco relevantes y no transferidos
                </option>
                <option value="3">
                  Resultados de investigación interesantes y transferidos
                </option>
                <option value="4">
                  Trabajos de investigación relevantes y transferidos
                </option>
                <option value="5">
                  Trabajos de investigación de gran impacto en el medio
                </option>
              </select>
            </label>
          </div>

          <div class="question">
            <p>
              Establecer un equipo multidisciplinario a fin de analizar la
              existencia de favorables de proyectos de investigación. Se
              deberían fijar metas y tiempos para efectuar permanentes
              revisiones, mejoras o ajustes para incrementar la interacción con
              la sociedad.
            </p>
            <label
              >Criterios de evaluación:
              <select name="existencia22">
                <option value="1">No tiene</option>
                <option value="2">
                  Resultados de investigación poco relevantes y no transferidos
                </option>
                <option value="3">
                  Resultados de investigación interesantes y transferidos
                </option>
                <option value="4">
                  Trabajos de investigación relevantes y transferidos
                </option>
                <option value="5">
                  Trabajos de investigación de gran impacto en el medio
                </option>
              </select>
            </label>
          </div>
          <div class="question">
            <p>
              Es muy importante, la divulgación de resultados favorables de
              proyectos de investigación a través de ayudas audio - visuales
              como afiches, panfletos, trípticos, etc. Así mismo es muy
              importante utilizar las ciber herramientas que existen
              actualmente.
            </p>
            <label
              >Criterios de evaluación:
              <select name="existencia23">
                <option value="1">No tiene</option>
                <option value="2">
                  Resultados de investigación poco relevantes y no transferidos
                </option>
                <option value="3">
                  Resultados de investigación interesantes y transferidos
                </option>
                <option value="4">
                  Trabajos de investigación relevantes y transferidos
                </option>
                <option value="5">
                  Trabajos de investigación de gran impacto en el medio
                </option>
              </select>
            </label>
          </div>
          <div class="question">
            <p>
              Verificar a través de encuestas el conocimiento sobre resultados
              favorables de proyectos de investigación.
            </p>
            <label
              >Criterios de evaluación:
              <select name="existencia24">
                <option value="1">No tiene</option>
                <option value="2">
                  Resultados de investigación poco relevantes y no transferidos
                </option>
                <option value="3">
                  Resultados de investigación interesantes y transferidos
                </option>
                <option value="4">
                  Trabajos de investigación relevantes y transferidos
                </option>
                <option value="5">
                  Trabajos de investigación de gran impacto en el medio
                </option>
              </select>
            </label>
          </div>
          <h3>
            7.5.2. Se debe demostrar que se tienen proyectos ejecutados y en
            plena ejecución en líneas de investigación de interés común entre la
            Universidad y otras instituciones.
          </h3>
          <div class="question">
            <p>
              Revisión y verificación de la existencia de proyectos ejecutados y
              en plena ejecución en líneas de investigación de interés común
              entre la Universidad y otras instituciones.
            </p>
            <label
              >Criterios de evaluación:
              <select name="existencia25">
                <option value="1">No tiene</option>

                <option value="2">Proyectos ejecutados poco relevantes</option>
                <option value="3">
                  Proyectos ejecutados y en plena ejecución en líneas de interés
                </option>
                <option value="4">
                  Proyectos ejecutados y en plena ejecución en líneas de interés
                  y de gran impacto en el medio
                </option>
                <option value="5">
                  Proyectos ejecutados y en plena ejecución en líneas de
                  interés, de gran impacto en el medio y reconocidos
                  internacionalmente
                </option>
              </select>
            </label>
          </div>

          <div class="question">
            <p>
              Establecer un equipo multidisciplinario a fin de analizar la
              existencia de proyectos ejecutados y en plena ejecución. Se
              deberían fijar metas y tiempos para efectuar permanentes
              revisiones, mejoras o ajustes para incrementar proyectos
              ejecutados y en plena ejecución.
            </p>
            <label
              >Criterios de evaluación:
              <select name="existencia26">
                <option value="1">No tiene</option>

                <option value="2">Proyectos ejecutados poco relevantes</option>
                <option value="3">
                  Proyectos ejecutados y en plena ejecución en líneas de interés
                </option>
                <option value="4">
                  Proyectos ejecutados y en plena ejecución en líneas de interés
                  y de gran impacto en el medio
                </option>
                <option value="5">
                  Proyectos ejecutados y en plena ejecución en líneas de
                  interés, de gran impacto en el medio y reconocidos
                  internacionalmente
                </option>
              </select>
            </label>
          </div>

          <div class="question">
            <p>
              Es muy importante, la divulgación de los proyectos ejecutados y en
              plena ejecución a través de ayudas audio - visuales como afiches,
              panfletos, trípticos, etc. Así mismo es muy importante utilizar
              las ciber herramientas que existen actualmente.
            </p>
            <label
              >Criterios de evaluación:
              <select name="existencia27">
                <option value="1">No tiene</option>

                <option value="2">Proyectos ejecutados poco relevantes</option>
                <option value="3">
                  Proyectos ejecutados y en plena ejecución en líneas de interés
                </option>
                <option value="4">
                  Proyectos ejecutados y en plena ejecución en líneas de interés
                  y de gran impacto en el medio
                </option>
                <option value="5">
                  Proyectos ejecutados y en plena ejecución en líneas de
                  interés, de gran impacto en el medio y reconocidos
                  internacionalmente
                </option>
              </select>
            </label>
          </div>

          <div class="question">
            <p>
              Verificar a través de encuestas el conocimiento sobre proyectos
              ejecutados y en plena ejecución.
            </p>
            <label
              >Criterios de evaluación:
              <select name="existencia28">
                <option value="1">No tiene</option>

                <option value="2">Proyectos ejecutados poco relevantes</option>
                <option value="3">
                  Proyectos ejecutados y en plena ejecución en líneas de interés
                </option>
                <option value="4">
                  Proyectos ejecutados y en plena ejecución en líneas de interés
                  y de gran impacto en el medio
                </option>
                <option value="5">
                  Proyectos ejecutados y en plena ejecución en líneas de
                  interés, de gran impacto en el medio y reconocidos
                  internacionalmente
                </option>
              </select>
            </label>
          </div>

          <button type="button" onclick="calculateGroupAverage('group5')">
            Calcular Promedio Grupo 5
          </button>
          <canvas id="chart5"></canvas>
        </div>

        <div id="group6" class="question-group">
          <h2>7.6. Publicación de Investigaciones</h2>
          <h3>
            7.6.1. Debe existir un número racional de proyectos de investigación
            concluidos y publicados en revistas especializadas
          </h3>
          <div class="question">
            <p>
              Revisión y verificación de la existencia un número racional de
              proyectos de investigación concluidos y publicados en revistas
              especializadas.
            </p>
            <label
              >Criterios de evaluación:
              <select name="existencia29">
                <option value="1">No existe</option>
                <option value="2">Pocos proyectos de investigación</option>
                <option value="3">
                  Número racional de proyectos de investigación
                </option>
                <option value="4">
                  Investigaciones publicadas en revistas especializadas
                  nacionales
                </option>
                <option value="5">
                  Investigaciones publicadas en revistas especializadas
                  internacionales
                </option>
              </select>
            </label>
          </div>

          <div class="question">
            <p>
              Establecer un equipo multidisciplinario a fin de analizar la
              existencia proyectos de investigación concluidos y publicados. Se
              deberían fijar metas y tiempos para efectuar permanentes
              revisiones, mejoras o ajustes para incrementar este tipo de
              proyectos.
            </p>
            <label
              >Criterios de evaluación:
              <select name="existencia30">
                <option value="1">No existe</option>
                <option value="2">Pocos proyectos de investigación</option>
                <option value="3">
                  Número racional de proyectos de investigación
                </option>
                <option value="4">
                  Investigaciones publicadas en revistas especializadas
                  nacionales
                </option>
                <option value="5">
                  Investigaciones publicadas en revistas especializadas
                  internacionales
                </option>
              </select>
            </label>
          </div>
          <div class="question">
            <p>
              Es muy importante, la divulgación de los proyectos de
              investigación concluidos y publicados a través de ayudas audio -
              visuales como afiches, panfletos, trípticos, etc. Así mismo es muy
              importante utilizar las ciber herramientas que existen
              actualmente.
            </p>
            <label
              >Criterios de evaluación:
              <select name="existencia31">
                <option value="1">No existe</option>
                <option value="2">Pocos proyectos de investigación</option>
                <option value="3">
                  Número racional de proyectos de investigación
                </option>
                <option value="4">
                  Investigaciones publicadas en revistas especializadas
                  nacionales
                </option>
                <option value="5">
                  Investigaciones publicadas en revistas especializadas
                  internacionales
                </option>
              </select>
            </label>
          </div>
          <div class="question">
            <p>
              Verificar a través de encuestas el conocimiento sobre proyectos de
              investigación concluidos y publicados.
            </p>
            <label
              >Criterios de evaluación:
              <select name="existencia32">
                <option value="1">No existe</option>
                <option value="2">Pocos proyectos de investigación</option>
                <option value="3">
                  Número racional de proyectos de investigación
                </option>
                <option value="4">
                  Investigaciones publicadas en revistas especializadas
                  nacionales
                </option>
                <option value="5">
                  Investigaciones publicadas en revistas especializadas
                  internacionales
                </option>
              </select>
            </label>
          </div>

          <button type="button" onclick="calculateGroupAverage('group6')">
            Calcular Promedio
          </button>
          <canvas id="chart6"></canvas>
        </div>
      </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="script.js"></script>

    <button type="button" onclick="calculateFinalAverage()">
      Calcular Promedio Final
    </button>
    <canvas id="finalChart"></canvas>
  </body>
</html>
