/**
 * ===================================================================
 * AGUAVIVA ESPERANZA - CASO DE ESTUDIO 7 (GESTIÓN SOLIDARIA UCC)
 * Script interactivo: Lógica del Prototipo en 7 Pasos, Simulador
 * del Fondo Rotatorio de Economía Circular y UI dinámica.
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* -----------------------------------------------------------------
   * 1. DATOS DEL PROTOTIPO (7 PASOS EXTRAÍDOS DEL DOCUMENTO)
   * ----------------------------------------------------------------- */
  const prototipoPasos = {
    1: {
      numero: 1,
      titulo: "Organización Comunitaria de Base",
      actores: "86 Familias + JAC + Líderes Comunitarios",
      icono: "fa-users",
      descripcion: "Las 86 familias campesinas que conforman la vereda La Esperanza se organizan formalmente mediante asamblea comunitaria. Se superan las acciones aisladas e informales y se establecen responsabilidades claras, comisiones de trabajo y compromisos mutuos de conservación.",
      acciones: [
        "Convocatoria y asamblea general comunitaria presencial con las 86 familias.",
        "Elección democrática de delegados por sectores para el Comité Ambiental Comunitario.",
        "Suscripción del pacto solidario veredal para la protección y rescate de la fuente hídrica.",
        "Distribución de roles por comisiones: siembra, reciclaje, educación y vigilancia comunitaria."
      ],
      valorSolidario: "Fomenta la <strong>cooperación y el sentido de pertenencia</strong>. Transforma el individualismo en corresponsabilidad colectiva sobre el bien común hídrico.",
      meta: "100% de representación territorial y asamblea de arranque formalizada."
    },
    2: {
      numero: 2,
      titulo: "Protección y Reforestación Ribereña",
      actores: "Comité Ambiental + Jóvenes Líderes + Familias",
      icono: "fa-tree",
      descripcion: "Se inician brigadas periódicas de siembra comunitaria y cuidado intensivo de las zonas de ronda de la quebrada. Se prioriza la revegetalización con especies nativas para estabilizar el terreno contra la erosión y árboles frutales para beneficio productivo futuro.",
      acciones: [
        "Instalación de vivero comunitario para propagación de plántulas nativas y frutales.",
        "Cada familia campesina apadrina un mínimo de 10 árboles a lo largo del año.",
        "Realización de dos grandes jornadas semestrales de reforestación en zonas críticas de la ronda hídrica.",
        "Limpieza y remoción manual de obstáculos y sedimentos acumulados en el cauce de la quebrada."
      ],
      valorSolidario: "Aplica la <strong>ayuda mutua campesina (minga)</strong> para restaurar la naturaleza que sustenta la vida de toda la vereda.",
      meta: "≥ 860 plántulas sembradas al año con tasa de supervivencia superior al 80%."
    },
    3: {
      numero: 3,
      titulo: "Manejo Integral y Seguro de Residuos",
      actores: "Familias Productoras + Gestores Autorizados",
      icono: "fa-recycle",
      descripcion: "Implementación de un sistema veredal de recolección selectiva y manejo seguro de residuos. Se ataca directamente la mala disposición de basuras en las orillas y se aplica un riguroso protocolo para residuos químicos altamente peligrosos.",
      acciones: [
        "Adecuación de tres puntos ecológicos veredales y un centro de acopio temporal techado y cercado ('Sembrando Futuro').",
        "Separación en la fuente: plásticos, metales y cartón aprovechables.",
        "Protocolo obligatorio de <strong>triple lavado</strong> y perforado de envases vacíos de agroquímicos.",
        "Entrega formal y certificada de envases tóxicos a gestores posconsumo autorizados (ej. CampoLimpio), garantizando cero vertimiento a la quebrada."
      ],
      valorSolidario: "Ejerce <strong>corresponsabilidad y ética ambiental</strong>: quien utiliza el insumo asume el deber de proteger la salud de sus vecinos y su cauce.",
      meta: "Erradicación de botaderos a cielo abierto y 100% de envases de agroquímicos neutralizados."
    },
    4: {
      numero: 4,
      titulo: "Educación Ambiental Intergeneracional",
      actores: "Mujeres Líderes + Jóvenes + Docentes Rurales",
      icono: "fa-chalkboard-user",
      descripcion: "Proceso pedagógico continuo adaptado a todas las edades de la vereda. Se capacita a los productores agrícolas en buenas prácticas y se educa a niños y jóvenes como los guardianes generacionales del ecosistema.",
      acciones: [
        "Talleres lúdico-ambientales en la escuela veredal desde la primera infancia sobre el valor sagrado del agua.",
        "Capacitaciones técnicas a campesinos en técnicas de compostaje, biofertilizantes y aplicación segura de insumos.",
        "Campañas de comunicación comunitaria a través de carteleras visibles, grupos de WhatsApp y perifoneo/radio local.",
        "Formación de jóvenes líderes en monitoreo ecológico y reporte de incidencias."
      ],
      valorSolidario: "<strong>Transmisión intergeneracional de saberes y valores solidarios</strong>, garantizando que el cambio cultural sea permanente y no una moda temporal.",
      meta: "100% de familias capacitadas y semillero juvenil ambiental activo."
    },
    5: {
      numero: 5,
      titulo: "Economía Circular y Valorización de Residuos",
      actores: "Junta de Acción Comunal (JAC) + Familias",
      icono: "fa-arrows-spin",
      descripcion: "Los residuos reciclables limpios acopiados por la comunidad son consolidados y comercializados colectivamente ante empresas gestoras autorizadas. La basura deja de ser un contaminante para convertirse en recursos financieros autónomos para la vereda.",
      acciones: [
        "Pesaje, registro de aportes por familia y almacenamiento temporal seguro de materiales reciclables.",
        "Venta consolidada periódica a intermediarios autorizados y recicladores de oficio.",
        "Ingreso de los fondos obtenidos directamente a la caja comunitaria vigilada por la Junta de Acción Comunal.",
        "Rendición de cuentas semestral pública con libro de contabilidad abierto a toda la asamblea."
      ],
      valorSolidario: "<strong>Autogestión económica y transparencia</strong>: se genera riqueza comunitaria sin depender de caridad ni subsidios paternalistas.",
      meta: "Autosuficiencia financiera para cubrir insumos de jornadas y alimentar el fondo de filtros."
    },
    6: {
      numero: 6,
      titulo: "Mejora del Agua en Hogares: Fondo de Filtros",
      actores: "Junta de Acción Comunal + Comité de Salud Familiar",
      icono: "fa-filter",
      descripcion: "Los recursos del reciclaje y aportes solidarios se reinvierten en la compra programada e instalación de sistemas de filtración doméstica de agua de alta eficiencia, resolviendo de inmediato la crisis de desabastecimiento de agua potable en los hogares.",
      acciones: [
        "Diagnóstico técnico de calidad físico-química del agua de la quebrada para elegir la tecnología de filtración idónea.",
        "Adquisición por lotes semestrales de filtros domiciliarios bacteriológicos de cerámica/carbón activo.",
        "Entrega de filtros como incentivo tangible a las familias que mantengan al menos el 80% de participación en jornadas de siembra y reciclaje.",
        "Talleres prácticos domiciliarios sobre correcto uso, mantenimiento y lavado periódico del filtro."
      ],
      valorSolidario: "<strong>Equidad distributiva y salud pública</strong>: prioriza a los hogares más vulnerables y vincula el esfuerzo ecológico colectivo con el bienestar de la mesa familiar.",
      meta: "86 familias campesinas con acceso a agua apta para consumo humano en sus hogares."
    },
    7: {
      numero: 7,
      titulo: "Evaluación, Monitoreo y Resultados Sostenibles",
      actores: "Comité de Monitoreo + Asesor Técnico + JAC",
      icono: "fa-circle-check",
      descripcion: "Monitoreo sistemático de los indicadores de impacto social, ecológico y económico. Se asegura la continuidad en el tiempo, corrigiendo desviaciones y demostrando a las familias que la unión comunitaria produce resultados medibles.",
      acciones: [
        "Medición mensual de kilos de residuos reciclados y envases de químicos retirados de circulación.",
        "Censo semestral de supervivencia de árboles sembrados en la ronda hídrica.",
        "Control sanitario y seguimiento al uso continuo de los filtros domiciliarios entregados.",
        "Presentación semestral de balance general en asamblea de la vereda La Esperanza."
      ],
      valorSolidario: "<strong>Veeduría comunitaria y sostenibilidad</strong>: afianza la confianza colectiva y demuestra que la economía solidaria resuelve problemáticas estructurales.",
      meta: "Ronda hídrica restaurada, disminución de enfermedades hídricas y comunidad empoderada."
    }
  };

  let currentStep = 1;

  // DOM Elements del Prototipo
  const stepNumberEl = document.getElementById('step-number');
  const stepTitleEl = document.getElementById('step-title');
  const stepActorsEl = document.getElementById('step-actors');
  const stepDescEl = document.getElementById('step-description');
  const stepActionsEl = document.getElementById('step-actions');
  const stepSolidaryEl = document.getElementById('step-solidary-value');
  const stepGoalEl = document.getElementById('step-goal');
  const prevStepBtn = document.getElementById('prev-step-btn');
  const nextStepBtn = document.getElementById('next-step-btn');
  const tabBtns = document.querySelectorAll('.proto-tab-btn');

  /**
   * Renderiza los datos de un paso específico en el prototipo
   */
  function renderPrototipoStep(stepNum) {
    if (!prototipoPasos[stepNum]) return;
    currentStep = stepNum;
    const data = prototipoPasos[stepNum];

    // Transición suave
    const displayCard = document.getElementById('proto-display');
    if (displayCard) {
      displayCard.style.opacity = '0.5';
      setTimeout(() => {
        displayCard.style.opacity = '1';
      }, 150);
    }

    stepNumberEl.textContent = data.numero;
    stepTitleEl.textContent = data.titulo;
    stepActorsEl.innerHTML = `<i class="fa-solid fa-user-group"></i> ${data.actores}`;
    stepDescEl.textContent = data.descripcion;

    // Renderizar lista de acciones
    stepActionsEl.innerHTML = '';
    data.acciones.forEach(accion => {
      const li = document.createElement('li');
      li.innerHTML = accion;
      stepActionsEl.appendChild(li);
    });

    stepSolidaryEl.innerHTML = data.valorSolidario;
    stepGoalEl.textContent = data.meta;

    // Actualizar tabs activas
    tabBtns.forEach(btn => {
      const step = parseInt(btn.getAttribute('data-step'));
      if (step === currentStep) {
        btn.classList.add('active');
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        btn.classList.remove('active');
      }
    });

    // Actualizar botones prev/next
    if (prevStepBtn) prevStepBtn.disabled = currentStep === 1;
    if (nextStepBtn) {
      if (currentStep === 7) {
        nextStepBtn.innerHTML = 'Volver al Inicio <i class="fa-solid fa-rotate-left"></i>';
      } else {
        nextStepBtn.innerHTML = 'Siguiente Fase <i class="fa-solid fa-arrow-right"></i>';
      }
    }
  }

  // Asignar listeners a tabs
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const step = parseInt(btn.getAttribute('data-step'));
      renderPrototipoStep(step);
    });
  });

  // Listeners de flechas de navegación
  if (prevStepBtn) {
    prevStepBtn.addEventListener('click', () => {
      if (currentStep > 1) {
        renderPrototipoStep(currentStep - 1);
      }
    });
  }

  if (nextStepBtn) {
    nextStepBtn.addEventListener('click', () => {
      if (currentStep < 7) {
        renderPrototipoStep(currentStep + 1);
      } else {
        renderPrototipoStep(1);
      }
    });
  }

  // Exponer función global para nodos del diagrama de flujo
  window.setPrototipoStep = function(stepNum) {
    renderPrototipoStep(stepNum);
    const element = document.getElementById('prototipo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /* -----------------------------------------------------------------
   * 2. SIMULADOR DEL MODELO COMUNITARIO Y FONDO ROTATORIO
   * ----------------------------------------------------------------- */
  const rangeFamilias = document.getElementById('range-familias');
  const rangeMeses = document.getElementById('range-meses');
  const rangeKg = document.getElementById('range-kg');
  const rangeArboles = document.getElementById('range-arboles');
  const btnResetSim = document.getElementById('btn-reset-sim');

  const valFamilias = document.getElementById('val-familias');
  const valMeses = document.getElementById('val-meses');
  const valKg = document.getElementById('val-kg');
  const valArboles = document.getElementById('val-arboles');

  // Resultados
  const resFiltros = document.getElementById('res-filtros');
  const resCobertura = document.getElementById('res-cobertura');
  const resKgTotal = document.getElementById('res-kg-total');
  const resArbolesTotal = document.getElementById('res-arboles-total');
  const resSupervivencia = document.getElementById('res-supervivencia');
  const resFondo = document.getElementById('res-fondo');
  const simVerdict = document.getElementById('sim-verdict');

  // Constantes de calibración del modelo comunitario
  const PRECIO_PROMEDIO_KG_RECICLAJE = 800; // Pesos COP promedio por kg de material aprovechable consolidado
  const COSTO_FILTRO_DOMICILIARIO = 170000; // Costo de un filtro cerámico o bacteriológico doméstico certificado (COP)
  const TASA_SUPERVIVENCIA_ESTIMADA = 0.85; // 85% de árboles nativos que prosperan con cuidado comunal

  function actualizarSimulador() {
    if (!rangeFamilias) return;

    const familias = parseInt(rangeFamilias.value);
    const meses = parseInt(rangeMeses.value);
    const kgMes = parseInt(rangeKg.value);
    const arbolesAno = parseInt(rangeArboles.value);

    // Actualizar etiquetas de controles
    valFamilias.textContent = `${familias} familias`;
    valMeses.textContent = `${meses} meses`;
    valKg.textContent = `${kgMes} kg/mes`;
    valArboles.textContent = `${arbolesAno} árboles`;

    // Cálculos matemáticos del modelo
    const totalKg = familias * kgMes * meses;
    const ingresoReciclaje = totalKg * PRECIO_PROMEDIO_KG_RECICLAJE;

    // Fondo rotatorio disponible: suma de ingresos por venta de reciclaje + aporte solidario comunal ($5.000/mes/familia)
    const aporteSolidario = familias * 5000 * meses;
    const fondoTotal = ingresoReciclaje + aporteSolidario;

    // Filtros que el fondo puede financiar directamente
    const filtrosComprables = Math.floor(fondoTotal / COSTO_FILTRO_DOMICILIARIO);
    // Cobertura limitada al número de familias participantes (máx 86)
    const filtrosInstalados = Math.min(filtrosComprables, familias);
    const porcentajeCobertura = Math.min(100, Math.round((filtrosInstalados / familias) * 100));

    // Árboles sembrados (proporcionales al tiempo en meses sobre 12 meses)
    const arbolesTotalesSembrados = Math.round(familias * arbolesAno * (meses / 12));
    const arbolesSobrevivientes = Math.round(arbolesTotalesSembrados * TASA_SUPERVIVENCIA_ESTIMADA);

    // Renderizar resultados con formateo numérico
    resKgTotal.textContent = totalKg.toLocaleString('es-CO');
    resArbolesTotal.textContent = arbolesTotalesSembrados.toLocaleString('es-CO');
    resSupervivencia.textContent = `85% supervivencia (~${arbolesSobrevivientes.toLocaleString('es-CO')} árboles vivos)`;

    resFiltros.textContent = filtrosInstalados;
    resCobertura.textContent = `${porcentajeCobertura}% Cobertura Veredal`;

    // Formatear fondo en Millones de pesos COP
    if (fondoTotal >= 1000000) {
      resFondo.textContent = `$ ${(fondoTotal / 1000000).toFixed(1)}M COP`;
    } else {
      resFondo.textContent = `$ ${(fondoTotal / 1000).toFixed(0)}k COP`;
    }

    // Actualizar veredicto cualitativo
    let veredictoTexto = "";
    if (porcentajeCobertura >= 90) {
      veredictoTexto = `<strong>¡Impacto Sobresaliente!</strong> Con ${familias} familias participando activamente durante ${meses} meses, el modelo cubre al ${porcentajeCobertura}% de la comunidad con agua potable segura y se reforesta sólidamente la ronda de la quebrada con ${arbolesTotalesSembrados} árboles nativos.`;
      simVerdict.style.borderColor = "var(--accent)";
    } else if (porcentajeCobertura >= 50) {
      veredictoTexto = `<strong>Progreso Favorable:</strong> Se alcanza una cobertura del ${porcentajeCobertura}% de filtros para las familias (${filtrosInstalados} hogares) y se canalizan ${totalKg.toLocaleString('es-CO')} kg de residuos fuera del afluente. Para llegar al 100%, se recomienda incentivar más meses de recolección continua.`;
      simVerdict.style.borderColor = "var(--primary)";
    } else {
      veredictoTexto = `<strong>Fase de Maduración Inicial:</strong> En los primeros ${meses} meses con ${familias} familias, el fondo financia ${filtrosInstalados} filtros prioritarios. Es necesario mantener la constancia en las jornadas de reciclaje para expandir la cobertura a todos los hogares.`;
      simVerdict.style.borderColor = "var(--warning)";
    }

    simVerdict.innerHTML = `
      <i class="fa-solid fa-circle-check text-accent"></i>
      <p>${veredictoTexto}</p>
    `;
  }

  // Event listeners para sliders
  if (rangeFamilias) {
    rangeFamilias.addEventListener('input', actualizarSimulador);
    rangeMeses.addEventListener('input', actualizarSimulador);
    rangeKg.addEventListener('input', actualizarSimulador);
    rangeArboles.addEventListener('input', actualizarSimulador);

    btnResetSim.addEventListener('click', () => {
      rangeFamilias.value = 86;
      rangeMeses.value = 12;
      rangeKg.value = 18;
      rangeArboles.value = 10;
      actualizarSimulador();
    });

    // Iniciar cálculo
    actualizarSimulador();
  }

  /* -----------------------------------------------------------------
   * 3. CAMBIO DE TEMA CLARO / OSCURO (DARK MODE)
   * ----------------------------------------------------------------- */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('aguaviva_theme') || 'light';

  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      themeToggleBtn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
      localStorage.setItem('aguaviva_theme', isDark ? 'dark' : 'light');
    });
  }

  /* -----------------------------------------------------------------
   * 4. MENÚ MÓVIL TOGGLE
   * ----------------------------------------------------------------- */
  const mobileToggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggleBtn && navMenu) {
    mobileToggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggleBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    // Cerrar menú al hacer clic en cualquier enlace
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }

  /* -----------------------------------------------------------------
   * 5. BOTÓN SUBIR AL INICIO (BACK TO TOP)
   * ----------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* -----------------------------------------------------------------
   * 6. MODAL INTERACTIVO
   * ----------------------------------------------------------------- */
  const protoModal = document.getElementById('protoModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');

  function closeModal() {
    if (protoModal) {
      protoModal.classList.remove('active');
      protoModal.setAttribute('aria-hidden', 'true');
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && protoModal && protoModal.classList.contains('active')) {
      closeModal();
    }
  });

  // Inicializar Prototipo en Paso 1
  renderPrototipoStep(1);

  console.log('AguaViva Esperanza Web App cargada exitosamente.');
});
