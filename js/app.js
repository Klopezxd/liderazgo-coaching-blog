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
  renderReflexiones();
  renderReferencias();
  initSearchReferencias();
  init360Selector();
  initLightbox();
});

// -----------------------------------------------------------------------------
// 1. GESTIÓN DEL TEMA (MODO CLARO POR DEFECTO ABSOLUTO)
// -----------------------------------------------------------------------------
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  // Modo claro estricto por defecto
  const isDark = localStorage.getItem("color-theme") === "dark";

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

  links?.forEach(link => {
    link.addEventListener("click", () => {
      menu?.classList.add("hidden");
    });
  });
}

// -----------------------------------------------------------------------------
// 4. SELECTOR INTERACTIVO: MODELO 360° (ALTO CONTRASTE)
// -----------------------------------------------------------------------------
const ACTORES_360_DATA = {
  superiores: {
    title: "Superiores Jerárquicos (Dirección y Jefaturas)",
    badge: "Alineación Estratégica",
    badgeColor: "bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 border border-blue-200 dark:border-blue-800",
    description:
      "Evalúan la alineación estratégica con los objetivos institucionales, la toma responsable de decisiones, la puntualidad en entregables críticos y la capacidad para gestionar recursos bajo incertidumbre.",
    metrics: [
      "Cumplimiento de metas e indicadores operativos pactados.",
      "Criterio técnico y resolución oportuna de contingencias.",
      "Representación institucional y respeto a conductos regulares.",
      "Gestión equitativa de presupuestos y cronogramas."
    ],
    quote: "«El superior evalúa si el líder transforma directrices complejas en resultados tangibles y medibles» (Bracken et al., 2001)."
  },
  pares: {
    title: "Pares y Compañeros de Equipo (Nivel Horizontal)",
    badge: "Sinergia & Cooperación",
    badgeColor: "bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800",
    description:
      "Ponderan la disposición genuina para el trabajo colaborativo, la honestidad en el intercambio de información, la reciprocidad en momentos de alta exigencia y la empatía cotidiana.",
    metrics: [
      "Espíritu de apoyo mutuo y corresponsabilidad operativa.",
      "Comunicación asertiva y resolución pacífica de desacuerdos.",
      "Generosidad en la transferencia de conocimientos técnicos.",
      "Puntualidad en los compromisos que afectan el trabajo ajeno."
    ],
    quote: "«Los pares detectan la coherencia real del trato humano más allá de las formalidades de cargo» (London & Smither, 1995)."
  },
  colaboradores: {
    title: "Colaboradores a Cargo (Equipos Guiados)",
    badge: "Liderazgo Servicial",
    badgeColor: "bg-purple-100 text-purple-900 dark:bg-purple-950 dark:text-purple-200 border border-purple-200 dark:border-purple-800",
    description:
      "Juzgan la accesibilidad y cercanía del líder, la claridad pedagógica de las instrucciones, la equidad en la distribución del trabajo y el respaldo brindado ante dificultades.",
    metrics: [
      "Seguridad psicológica y apertura para escuchar inquietudes.",
      "Reconocimiento oportuno de los méritos del equipo.",
      "Retroalimentación formativa sin actitudes punitivas.",
      "Fomento de la autonomía decisional y el crecimiento profesional."
    ],
    quote: "«La valoración de los colaboradores revela el impacto emocional y la credibilidad inspiradora del liderazgo» (Smither et al., 1995)."
  },
  autoevaluacion: {
    title: "Autoevaluación (Reflexión Introspectiva)",
    badge: "Autoconocimiento",
    badgeColor: "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 border border-amber-200 dark:border-amber-800",
    description:
      "Constituye el ejercicio de madurez donde el propio individuo analiza con rigor ético sus fortalezas, sus puntos ciegos, sus reacciones emocionales ante la presión y sus áreas de mejora.",
    metrics: [
      "Contraste honesto entre la intención propia y la percepción ajena.",
      "Identificación de hábitos de fatiga o procrastinación.",
      "Disposición real a recibir retroalimentación constructiva.",
      "Formulación de compromisos voluntarios de superación continua."
    ],
    quote: "«La autoevaluación es el punto de partida indispensable para que el coaching active un plan duradero» (Chiavenato, 2020)."
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
        btn.className = "actor-360-btn py-2 px-3 rounded-xl text-xs font-bold transition-all text-center bg-espe-navy text-white shadow-sm";
      } else {
        btn.className = "actor-360-btn py-2 px-3 rounded-xl text-xs font-bold transition-all text-center bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700";
      }
    });

    contentContainer.innerHTML = `
      <div class="animate-fade-in p-5 sm:p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white" style="font-family: var(--font-heading);">${data.title}</h4>
          <span class="text-xs font-bold px-2.5 py-1 rounded-md ${data.badgeColor}">${data.badge}</span>
        </div>
        <p class="text-slate-700 dark:text-slate-200 text-sm leading-relaxed mb-4">${data.description}</p>
        <div class="bg-slate-50 dark:bg-slate-800/70 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-3">
          <h5 class="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">Aspectos Observables:</h5>
          <ul class="space-y-1.5">
            ${data.metrics.map(m => `<li class="flex items-start gap-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200"><span class="text-emerald-600 dark:text-emerald-400 font-bold">✓</span> ${m}</li>`).join('')}
          </ul>
        </div>
        <p class="text-xs italic text-slate-600 dark:text-slate-400 border-l-2 border-espe-navy dark:border-sky-500 pl-3" style="font-family: var(--font-editorial);">${data.quote}</p>
      </div>
    `;
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-actor");
      if (key) updateCard(key);
    });
  });

  updateCard("superiores");
}

// -----------------------------------------------------------------------------
// 5. ACORDEÓN REFINADO: PREGUNTAS PODEROSAS ICF
// -----------------------------------------------------------------------------
function renderPreguntasICF() {
  const container = document.getElementById("preguntas-icf-container");
  if (!container) return;

  container.innerHTML = PREGUNTAS_ICF_DATA.map((item, idx) => `
    <div class="accordion-item mb-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 overflow-hidden bg-white dark:bg-slate-800/80 shadow-sm transition-all">
      <button type="button" class="w-full text-left py-3.5 px-4 flex items-center justify-between gap-4 text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors" onclick="toggleICFItem(${idx})">
        <div class="flex items-center gap-3">
          <span class="text-xs font-bold font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600">${item.num}</span>
          <span class="text-sm font-semibold" style="font-family: var(--font-heading);">${item.question}</span>
        </div>
        <svg id="icf-icon-${idx}" class="w-4 h-4 text-slate-400 dark:text-slate-300 flex-shrink-0 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div id="icf-body-${idx}" class="hidden p-4 pt-2 border-t border-slate-100 dark:border-slate-700/60 bg-slate-50/70 dark:bg-slate-900/60 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
        <p>
          <strong class="font-bold text-slate-900 dark:text-white">Propósito formativo:</strong> ${item.explanation}
        </p>
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
// 6. VIDEOTECA Y RECURSOS AUDIOVISUALES (FILTROS PÍLDORA)
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
          <div class="flex items-center justify-between text-xs font-semibold mb-2 text-slate-500 dark:text-slate-400">
            <span class="text-espe-navy dark:text-sky-400 uppercase tracking-wider text-[11px] font-bold">${v.category.toUpperCase()}</span>
            <span>${v.speaker}</span>
          </div>
          <h4 class="font-bold text-base text-slate-900 dark:text-white mb-2 leading-snug" style="font-family: var(--font-heading);">${v.title}</h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${v.description}</p>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-end text-xs">
          <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Ver en YouTube ↗</a>
        </div>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".filter-pill").forEach(btn => {
    const cat = btn.getAttribute("data-cat");
    if (cat === category) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

window.filterVideos = function(category) {
  renderVideoteca(category);
};

// -----------------------------------------------------------------------------
// 7. LIGHTBOX MODAL PARA INFOGRAFÍAS
// -----------------------------------------------------------------------------
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
  if (modalAuthor) modalAuthor.textContent = author ? `Fuente: ${author}` : "";
  modal.classList.remove("hidden");
};

// -----------------------------------------------------------------------------
// 8. REFLEXIÓN GRUPAL EDITORIAL
// -----------------------------------------------------------------------------
function renderReflexiones() {
  const container = document.getElementById("reflexiones-grid");
  if (!container) return;

  container.innerHTML = TEAM_MEMBERS.map(m => `
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm card-hover flex flex-col justify-between">
      <div>
        <div class="border-b border-slate-100 dark:border-slate-700/60 pb-2.5 mb-3">
          <h4 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug" style="font-family: var(--font-heading);">${m.name}</h4>
          <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">${m.career} • ${m.topic}</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic" style="font-family: var(--font-editorial);">"${m.reflection}"</p>
      </div>
    </div>
  `).join("");
}

// -----------------------------------------------------------------------------
// 9. BIBLIOTECA APA 7 (LISTA ACADÉMICA LIMPIA CON SANGRÍA FRANCESA)
// -----------------------------------------------------------------------------
let currentRefCategory = "all";

function renderReferencias(searchQuery = "") {
  const container = document.getElementById("referencias-container");
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

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center text-slate-500 dark:text-slate-400">
        <p class="text-sm font-semibold">No se encontraron referencias para la búsqueda.</p>
        <p class="text-xs mt-1">Intenta buscar por autor (ej. Chiavenato, Whitmore, Marsh) o año.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(r => `
    <div class="apa-reference-item text-xs sm:text-sm text-slate-900 dark:text-slate-100">
      <strong>${r.author}</strong> (${r.year}). <em>${r.title}</em>. ${r.source}.
      ${r.doi ? `<a href="${r.doi}" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline break-all inline-block ml-1">🔗 ${r.doi}</a>` : ""}
    </div>
  `).join("");
}

function initSearchReferencias() {
  const input = document.getElementById("ref-search-input");
  input?.addEventListener("input", (e) => {
    renderReferencias(e.target.value);
  });
}
