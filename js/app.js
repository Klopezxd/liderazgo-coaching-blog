/**
 * APPLICATION LOGIC - BLOG GRUPAL LIDERAZGO & COACHING
 * Universidad de las Fuerzas Armadas ESPE
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initReadingProgress();
  initMobileMenu();
  renderPreguntasICF();
  renderVideoteca("all");
  renderInfografias("all");
  renderReflexiones("all");
  renderReferencias();
  initSearchReferencias();
  init360Selector();
  initLightbox();
});

// -----------------------------------------------------------------------------
// 1. GESTIÓN DEL TEMA (MODO CLARO / OSCURO)
// -----------------------------------------------------------------------------
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  const isDark =
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  if (isDark) {
    document.documentElement.classList.add("dark");
    darkIcon?.classList.add("hidden");
    lightIcon?.classList.remove("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    lightIcon?.classList.add("hidden");
    darkIcon?.classList.remove("hidden");
  }

  themeToggleBtn?.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    const currentlyDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("color-theme", currentlyDark ? "dark" : "light");

    if (currentlyDark) {
      darkIcon?.classList.add("hidden");
      lightIcon?.classList.remove("hidden");
    } else {
      lightIcon?.classList.add("hidden");
      darkIcon?.classList.remove("hidden");
    }
  });
}

// -----------------------------------------------------------------------------
// 2. BARRA DE PROGRESO DE LECTURA
// -----------------------------------------------------------------------------
function initReadingProgress() {
  const progressBar = document.getElementById("reading-progress");
  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = scrolled + "%";
    }
  });
}

// -----------------------------------------------------------------------------
// 3. MENÚ MÓVIL
// -----------------------------------------------------------------------------
function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const links = menu?.querySelectorAll("a");

  btn?.addEventListener("click", () => {
    menu?.classList.toggle("hidden");
  });

  links?.forEach((link) => {
    link.addEventListener("click", () => {
      menu?.classList.add("hidden");
    });
  });
}

// -----------------------------------------------------------------------------
// 4. INTERACTIVO: SELECTOR DE ACTORES 360°
// -----------------------------------------------------------------------------
const ACTORES_360_DATA = {
  superiores: {
    title: "1. Superiores Jerárquicos (Dirección y Jefaturas)",
    badge: "Visión Estratégica",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    description:
      "Evalúan la alineación estratégica con los objetivos institucionales, la toma responsable de decisiones, la puntualidad en entregables críticos y la capacidad para gestionar recursos organizacionales bajo presión.",
    metrics: [
      "Cumplimiento de metas e indicadores operativos.",
      "Resolución oportuna de contingencias y criterio técnico.",
      "Representación institucional y respeto a los conductos regulares.",
      "Capacidad de gestión de presupuestos y cronogramas."
    ],
    quote: "«El superior evalúa si el colaborador transforma directrices complejas en resultados tangibles y medibles» (Bracken et al., 2001)."
  },
  pares: {
    title: "2. Pares y Compañeros de Equipo (Relaciones Horizontales)",
    badge: "Sinergia & Cooperación",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
    description:
      "Ponderan la disposición genuina para el trabajo colaborativo, la honestidad en el intercambio de información, la reciprocidad en momentos de alta carga y la empatía en la convivencia cotidiana.",
    metrics: [
      "Espíritu de apoyo mutuo y corresponsabilidad.",
      "Comunicación asertiva y resolución pacífica de desacuerdos.",
      "Generosidad en la transferencia de conocimientos técnicos.",
      "Puntualidad en los compromisos que afectan el trabajo ajeno."
    ],
    quote: "«Los pares detectan la coherencia real del trato humano más allá de las apariencias formales de jerarquía» (London & Smither, 1995)."
  },
  colaboradores: {
    title: "3. Colaboradores a Cargo (Subordinados y Equipos Guiados)",
    badge: "Liderazgo Servicial",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
    description:
      "Juzgan la cercanía y accesibilidad afectiva del líder, la claridad pedagógica de las instrucciones impartidas, la equidad en la distribución del trabajo y el respaldo brindado ante dificultades operativas.",
    metrics: [
      "Seguridad psicológica y apertura para escuchar inquietudes.",
      "Reconocimiento público de los méritos del equipo.",
      "Retroalimentación formativa sin humillaciones ni represalias.",
      "Fomento de la autonomía decisional y el crecimiento profesional."
    ],
    quote: "«La valoración de los colaboradores revela el impacto emocional y la credibilidad inspiradora del liderazgo» (Smither et al., 1995)."
  },
  autoevaluacion: {
    title: "4. Autoevaluación (Reflexión Introspectiva)",
    badge: "Autoconocimiento Crítico",
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
    description:
      "Constituye el ejercicio de madurez donde el propio individuo analiza con rigor ético sus fortalezas consolidadas, sus puntos ciegos, sus reacciones emocionales ante la frustración y sus aspiraciones formativas.",
    metrics: [
      "Contraste honesto entre la intención propia y la percepción externa.",
      "Identificación de hábitos de procrastinación o fatiga.",
      "Disposición real a recibir retroalimentación constructiva.",
      "Formulación de compromisos voluntarios de superación."
    ],
    quote: "«La autoevaluación es el punto de partida indispensable para que el coaching active un plan de mejora duradero» (Chiavenato, 2020)."
  }
};

function init360Selector() {
  const buttons = document.querySelectorAll(".actor-360-btn");
  const contentContainer = document.getElementById("actor-360-content");

  function updateCard(key) {
    const data = ACTORES_360_DATA[key];
    if (!data || !contentContainer) return;

    buttons.forEach((btn) => {
      const btnKey = btn.getAttribute("data-actor");
      if (btnKey === key) {
        btn.classList.add("bg-espe-navy", "text-white", "shadow-md");
        btn.classList.remove("bg-slate-100", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300");
      } else {
        btn.classList.remove("bg-espe-navy", "text-white", "shadow-md");
        btn.classList.add("bg-slate-100", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300");
      }
    });

    contentContainer.innerHTML = `
      <div class="animate-fade-in p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
          <h4 class="text-xl font-bold text-slate-900 dark:text-white">${data.title}</h4>
          <span class="text-xs font-semibold px-3 py-1 rounded-full ${data.badgeColor}">${data.badge}</span>
        </div>
        <p class="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-5">${data.description}</p>
        <div class="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 mb-4">
          <h5 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">Factores e Indicadores Observables:</h5>
          <ul class="space-y-2">
            ${data.metrics.map(m => `<li class="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"><span class="text-emerald-500 font-bold">✓</span> ${m}</li>`).join('')}
          </ul>
        </div>
        <p class="text-xs italic text-slate-500 dark:text-slate-400 border-l-2 border-espe-navy pl-3">${data.quote}</p>
      </div>
    `;
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-actor");
      if (key) updateCard(key);
    });
  });

  // Inicializar en superiores
  updateCard("superiores");
}

// -----------------------------------------------------------------------------
// 5. ACORDEÓN INTERACTIVO: DECÁLOGO DE PREGUNTAS PODEROSAS ICF
// -----------------------------------------------------------------------------
function renderPreguntasICF() {
  const container = document.getElementById("preguntas-icf-container");
  if (!container) return;

  container.innerHTML = PREGUNTAS_ICF_DATA.map((item, idx) => `
    <div class="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800 transition-all">
      <button type="button" class="w-full text-left p-4.5 flex items-center justify-between gap-4 font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors" onclick="toggleICFItem(${idx})">
        <div class="flex items-center gap-3">
          <span class="text-xs font-bold font-mono px-2.5 py-1 rounded-md bg-espe-navy/10 text-espe-navy dark:bg-sky-900/40 dark:text-sky-300">${item.num}</span>
          <span class="text-sm md:text-base">${item.question}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="hidden sm:inline-block text-xs font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">${item.purpose}</span>
          <svg id="icf-icon-${idx}" class="w-5 h-5 text-slate-400 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div id="icf-body-${idx}" class="hidden p-4.5 pt-0 text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700/50 bg-slate-50/60 dark:bg-slate-900/40">
        <p class="mb-2"><strong class="text-slate-800 dark:text-slate-200">Propósito Formativo:</strong> ${item.explanation}</p>
        <span class="text-xs text-espe-accent font-semibold">Fundamento: Modelo de Competencias ICF (Evocación de Conciencia y Presencia)</span>
      </div>
    </div>
  `).join("");
}

window.toggleICFItem = function(idx) {
  const body = document.getElementById(`icf-body-${idx}`);
  const icon = document.getElementById(`icf-icon-${idx}`);
  if (!body || !icon) return;

  const isHidden = body.classList.contains("hidden");
  if (isHidden) {
    body.classList.remove("hidden");
    icon.classList.add("rotate-180");
  } else {
    body.classList.add("hidden");
    icon.classList.remove("rotate-180");
  }
};

// -----------------------------------------------------------------------------
// 6. VIDEOTECA Y RECURSOS MULTIMEDIA
// -----------------------------------------------------------------------------
function renderVideoteca(category) {
  const container = document.getElementById("videos-grid");
  if (!container) return;

  const filtered = category === "all" ? VIDEOS_DATA : VIDEOS_DATA.filter(v => v.category === category);

  container.innerHTML = filtered.map(v => `
    <div class="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm card-hover flex flex-col">
      <div class="relative pb-[56.25%] bg-black">
        <iframe 
          class="absolute top-0 left-0 w-full h-full" 
          src="https://www.youtube.com/embed/${v.id}?rel=0" 
          title="${v.title}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          loading="lazy">
        </iframe>
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-xs font-semibold mb-2">
            <span class="text-espe-navy dark:text-sky-400 uppercase tracking-wider">${v.category.toUpperCase()}</span>
            <span class="text-slate-400">${v.speaker}</span>
          </div>
          <h4 class="font-bold text-base text-slate-900 dark:text-white mb-2 leading-snug">${v.title}</h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">${v.description}</p>
        </div>
        <div class="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500">
          <span>Aporte: <strong>${v.member}</strong></span>
          <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">Ver en YouTube ↗</a>
        </div>
      </div>
    </div>
  `).join("");

  // Actualizar estilos de los botones de filtro
  document.querySelectorAll(".video-filter-btn").forEach(btn => {
    const cat = btn.getAttribute("data-cat");
    if (cat === category) {
      btn.classList.add("bg-espe-navy", "text-white");
      btn.classList.remove("bg-slate-100", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300");
    } else {
      btn.classList.remove("bg-espe-navy", "text-white");
      btn.classList.add("bg-slate-100", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300");
    }
  });
}

window.filterVideos = function(category) {
  renderVideoteca(category);
};

// -----------------------------------------------------------------------------
// 7. GALERÍA DE INFOGRAFÍAS Y LIGHTBOX
// -----------------------------------------------------------------------------
function renderInfografias(category) {
  const container = document.getElementById("infografias-grid");
  if (!container) return;

  const filtered = category === "all" ? INFOGRAPHICS_DATA : INFOGRAPHICS_DATA.filter(i => i.category === category);

  container.innerHTML = filtered.map(item => `
    <div class="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm card-hover flex flex-col">
      <div class="relative overflow-hidden cursor-pointer group bg-slate-100 dark:bg-slate-900 aspect-video flex items-center justify-center" onclick="openLightbox('${item.image}', '${item.title}', '${item.author}')">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300" loading="lazy">
        <div class="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span class="bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">🔍 Ampliar Imagen</span>
        </div>
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-xs mb-2">
            <span class="font-bold text-espe-accent uppercase tracking-wider">${item.tool}</span>
            <span class="text-slate-400">${item.author}</span>
          </div>
          <h4 class="font-bold text-base text-slate-900 dark:text-white mb-2 leading-snug">${item.title}</h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">${item.description}</p>
        </div>
        <button type="button" class="w-full py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors" onclick="openLightbox('${item.image}', '${item.title}', '${item.author}')">
          Ver recurso en alta resolución
        </button>
      </div>
    </div>
  `).join("");
}

function initLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const closeBtn = document.getElementById("lightbox-close");

  closeBtn?.addEventListener("click", () => {
    modal?.classList.add("hidden");
  });

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal?.classList.contains("hidden")) {
      modal?.classList.add("hidden");
    }
  });
}

window.openLightbox = function(imageSrc, title, author) {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const modalTitle = document.getElementById("lightbox-title");
  const modalAuthor = document.getElementById("lightbox-author");

  if (!modal || !modalImg) return;

  modalImg.src = imageSrc;
  if (modalTitle) modalTitle.textContent = title;
  if (modalAuthor) modalAuthor.textContent = `Autor/a: ${author}`;
  modal.classList.remove("hidden");
};

// -----------------------------------------------------------------------------
// 8. MURO DE REFLEXIONES DEL GRUPO A
// -----------------------------------------------------------------------------
function renderReflexiones(careerFilter) {
  const container = document.getElementById("reflexiones-grid");
  if (!container) return;

  const filtered = careerFilter === "all" ? TEAM_MEMBERS : TEAM_MEMBERS.filter(m => m.career.toLowerCase().includes(careerFilter.toLowerCase()));

  container.innerHTML = filtered.map(m => `
    <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm card-hover flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-3.5 mb-4">
          <div class="w-11 h-11 rounded-full bg-gradient-to-tr ${m.color} text-white font-bold flex items-center justify-center text-sm shadow-sm flex-shrink-0">
            ${m.avatar}
          </div>
          <div>
            <h4 class="font-bold text-slate-900 dark:text-white text-base leading-tight">${m.name}</h4>
            <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">${m.career} • ${m.role}</span>
          </div>
        </div>
        <div class="mb-3">
          <span class="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 mb-2">${m.reflectionTitle}</span>
          <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">"${m.reflectionText}"</p>
        </div>
      </div>
      <div class="pt-3 border-t border-slate-100 dark:border-slate-700/60 text-xs text-slate-400 font-medium">
        Apartado Asignado: ${m.topic.split(":")[0]}
      </div>
    </div>
  `).join("");
}

// -----------------------------------------------------------------------------
// 9. BUSCADOR DINÁMICO DE REFERENCIAS BIBLIOGRÁFICAS (APA 7)
// -----------------------------------------------------------------------------
let currentRefCategory = "all";

function renderReferencias(searchQuery = "") {
  const container = document.getElementById("referencias-container");
  const countBadge = document.getElementById("referencias-count");
  if (!container) return;

  let filtered = REFERENCES_DATA;

  if (currentRefCategory !== "all") {
    filtered = filtered.filter(r => r.category === currentRefCategory);
  }

  if (searchQuery.trim() !== "") {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(r =>
      r.author.toLowerCase().includes(q) ||
      r.title.toLowerCase().includes(q) ||
      r.source.toLowerCase().includes(q) ||
      r.year.toString().includes(q)
    );
  }

  if (countBadge) {
    countBadge.textContent = `${filtered.length} de ${REFERENCES_DATA.length} referencias`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center text-slate-500 dark:text-slate-400">
        <p class="text-base font-semibold">No se encontraron referencias para la búsqueda.</p>
        <p class="text-xs mt-1">Intenta con otros términos como "coaching", "Chiavenato", "2026" o "IA".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(r => `
    <div class="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-espe-navy/40 transition-colors">
      <p class="apa-reference text-sm text-slate-800 dark:text-slate-200">
        <strong>${r.author}</strong> (${r.year}). <em>${r.title}</em>. ${r.source}.
        ${r.doi ? `<a href="${r.doi}" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline break-all block mt-1 text-xs">🔗 ${r.doi}</a>` : ""}
      </p>
    </div>
  `).join("");
}

function initSearchReferencias() {
  const input = document.getElementById("ref-search-input");
  const filterBtns = document.querySelectorAll(".ref-filter-btn");

  input?.addEventListener("input", (e) => {
    renderReferencias(e.target.value);
  });

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      currentRefCategory = btn.getAttribute("data-cat") || "all";

      filterBtns.forEach(b => {
        if (b === btn) {
          b.classList.add("bg-espe-navy", "text-white");
          b.classList.remove("bg-slate-100", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300");
        } else {
          b.classList.remove("bg-espe-navy", "text-white");
          b.classList.add("bg-slate-100", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300");
        }
      });

      renderReferencias(input?.value || "");
    });
  });
}
