/**
 * DATA STORE - BLOG GRUPAL LIDERAZGO & COACHING
 * Universidad de las Fuerzas Armadas ESPE
 * Actividad de Aprendizaje N.º 05 - Grupo A
 */

const TEAM_MEMBERS = [
  {
    id: "nicole-tonato",
    name: "Nicole Estefania Tonato Tonato",
    career: "Educación Básica",
    role: "Investigadora & Redactora",
    topic: "1.1 Envío del Mensaje, Claridad e Intencionalidad en Canales Digitales",
    reflectionTitle: "5.1 ¿Cómo ha cambiado la comunicación con la digitalización?",
    reflectionText: "La digitalización ha transformado sustancialmente los canales y dinámicas de interacción humana, posibilitando el intercambio instantáneo de información y conectando actores dispersos geográficamente. En el contexto de proyectos educativos y organizacionales, las herramientas tecnológicas permiten coordinar responsabilidades de forma ágil mediante entornos colaborativos. No obstante, como advierten Carlos Tandazo et al. (2016), este paradigma entraña desafíos notables, particularmente la atenuación del contacto visual cara a cara y el riesgo de distorsión en los mensajes escritos. La tecnología debe gestionarse como un puente que optimiza la eficiencia, manteniendo siempre como cimiento el respeto, la calidez y la empatía.",
    avatar: "NT",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: "francis-batallas",
    name: "Francis Alejandro Batallas Izurieta",
    career: "Educación Básica",
    role: "Compilador General & Redactor",
    topic: "1.2 Recepción del Mensaje, Contexto y Barreras Comunicacionales",
    reflectionTitle: "5.2 ¿Qué habilidades comunicacionales son clave en líderes actuales?",
    reflectionText: "En las dinámicas híbridas actuales, los esquemas de jefatura rígidos e impersonales han quedado obsoletos. Las organizaciones demandan líderes facilitadores, cuya principal virtud radica en edificar confianza mutua mediante una comunicación transparente y cercana. Un líder eficaz domina la escucha activa libre de juicios precipitados, comprende los desafíos particulares de su equipo, imparte directrices claras y accesibles, y reconoce los logros oportunamente mientras aborda los desacuerdos en privado con respeto. La humildad para recibir retroalimentación constructiva sobre el propio desempeño constituye la clave para sostener la unidad de los equipos.",
    avatar: "FB",
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "paola-amaguaya",
    name: "Paola Estephania Amaguaya Galeas",
    career: "Educación Inicial",
    role: "Investigadora Académica & Redactora",
    topic: "1.3 Ciclo de Retroalimentación, Ruido Digital y Nuevas Tecnologías (Enfoque 2026)",
    reflectionTitle: "5.3 ¿Cómo el coaching contribuye al desarrollo del talento humano?",
    reflectionText: "El coaching impulsa el desarrollo del talento porque reemplaza la imposición unidireccional por un acompañamiento respetuoso y estimulante. Mediante interrogantes orientadas al descubrimiento personal, el orientador facilita que el colaborador identifique sus competencias, dimensione sus brechas y formule cursos de acción propios (Jarosz & Cartor, 2025). Investigaciones empíricas como la de Mowat et al. (2025) ratifican que el coaching formal genera un mayor sentido de pertenencia y compromiso laboral. Su valor esencial reside en emancipar las capacidades del individuo, promoviendo la autonomía decisional y la corresponsabilidad profesional.",
    avatar: "PA",
    color: "from-violet-500 to-purple-600"
  },
  {
    id: "dajanara-borbor",
    name: "Dajanara Belem Borbor Limones",
    career: "Pedagogía de los Idiomas Nacionales y Extranjeros",
    role: "Diseñadora Metodológica & Redactora",
    topic: "1.4 Caso Práctico Aplicado: Proceso de Comunicación y Resolución de Conflictos",
    reflectionTitle: "5.4 ¿Qué desafíos presenta la comunicación en entornos virtuales?",
    reflectionText: "La virtualidad impone desafíos relacionales de consideración. En primer lugar, se manifiesta un distanciamiento interpersonal que debilita la confianza espontánea. En segundo lugar, la preponderancia de canales escritos planos suscita interpretaciones erróneas de frialdad o susceptibilidad (Robbins & Judge, 2017). Asimismo, las sesiones remotas con cámaras inactivas generan silencios que dificultan constatar la asimilación del mensaje. Finalmente, la exposición continua a pantallas induce a la fatiga cognitiva e infoxicación (Peiró & Soler, 2020). Superar estos retos exige líderes que resguarden la seguridad psicológica y complementen las directrices breves con espacios síncronos empáticos.",
    avatar: "DB",
    color: "from-amber-500 to-orange-600"
  },
  {
    id: "fredy-cuichan",
    name: "Fredy Esau Cuichan Bautista",
    career: "Educación Básica",
    role: "Analista de Evaluación 360° & Redactor",
    topic: "2.1 Fundamentos del Modelo 360°, Cultura Organizacional y los Cuatro Actores Evaluativos",
    reflectionTitle: "5.5 Aprendizajes adquiridos en comunicación y entornos digitales",
    reflectionText: "A lo largo de la actividad se evidenció que la comunicación en entornos digitales es el pilar que sostiene la productividad y la cohesión de los equipos de trabajo (Lane et al., 2024). Las plataformas tecnológicas abren enormes posibilidades de articulación remota, pero también pueden generar barreras si no se establecen protocolos claros de interacción. Asimismo, se confirmó que el intercambio de retroalimentación oportuna en ambientes virtuales resulta indispensable para efectuar ajustes operativos y alcanzar los propósitos del equipo (Handke et al., 2022), fundamentado siempre en el respeto y la corresponsabilidad.",
    avatar: "FC",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "ariel-taco",
    name: "Ariel Anabel Taco Coque",
    career: "Educación Inicial",
    role: "Analista Metodológica & Redactora",
    topic: "2.2 Caso Práctico Aplicado 360°, Metodología, Beneficios y Gestión de Riesgos",
    reflectionTitle: "5.6 Aprendizajes adquiridos en coaching y modelo de evaluación 360°",
    reflectionText: "La articulación entre el modelo 360° y las competencias conversacionales del coaching constituyó un aprendizaje medular. El ejercicio evidenció que la evaluación multisource pierde su propósito si se percibe como una fiscalización punitiva; por el contrario, cobra valor pedagógico cuando sus resultados se transforman en insumos para un diálogo de coaching formativo. El líder debe facilitar un clima de confidencialidad y confianza donde el colaborador pueda examinar sus áreas de oportunidad sin temores, asumiendo compromisos medibles de desarrollo profesional que fortalezcan la madurez organizacional.",
    avatar: "AT",
    color: "from-rose-500 to-pink-600"
  },
  {
    id: "daysi-tipantuna",
    name: "Daysi Cristina Tipantuña Montalvo",
    career: "Pedagogía de los Idiomas Nacionales y Extranjeros",
    role: "Investigadora ICF & Redactora",
    topic: "3.1 Fundamentos del Modelo ICF, Competencias Clave y Decálogo de Preguntas Poderosas",
    reflectionTitle: "5.7 Importancia de la comunicación en entornos actuales",
    reflectionText: "La comunicación en los escenarios organizacionales y educativos actuales representa el motor que permite gestionar el cambio, mitigar la incertidumbre y consolidar la sinergia grupal. Trascendiendo la mera transferencia instrumental de directrices, la comunicación asertiva promueve una cultura de apertura, reciprocidad y escucha activa. Cuando los miembros de un equipo se sienten genuinamente escuchados y respaldados, las dificultades operativas se resuelven con agilidad y se potencia el compromiso colectivo.",
    avatar: "DT",
    color: "from-fuchsia-500 to-rose-600"
  },
  {
    id: "klever-lopez",
    name: "Klever Josué López Quilligana",
    career: "Ingeniería en Tecnologías de la Información",
    role: "Arquitecto Web del Blog & Redactor",
    topic: "3.2 Pautas Prácticas de Acompañamiento en Reuniones 1 a 1 | Despliegue Web",
    reflectionTitle: "5.8 Autoevaluación del trabajo en equipo",
    reflectionText: "El desarrollo de esta actividad permitió consolidar un espacio de trabajo colaborativo basado en la responsabilidad compartida, el respeto mutuo y la comunicación continua. Al contar con distintas perspectivas y experiencias formativas dentro del grupo, se logró enriquecer el análisis de los temas planteados, integrando aportes complementarios tanto en la parte conceptual como en la resolución de los casos prácticos y el diseño del entorno digital. A lo largo del proceso se mantuvo un diálogo fluido que facilitó coordinar las entregas, resolver dudas oportunamente y apoyar a los compañeros en las distintas fases. Esta experiencia de trabajo en equipo no solo permitió cumplir con los objetivos académicos, sino que también sirvió para poner en práctica principios fundamentales como la empatía, la escucha activa y el liderazgo participativo.",
    avatar: "KL",
    color: "from-blue-600 to-indigo-800"
  }
];

const VIDEOS_DATA = [
  {
    id: "k1t6jS_lOqE",
    title: "Comunicación Asertiva para el Trabajo en Equipo",
    speaker: "Alejandro Sierralta (Conferencia TEDx)",
    category: "comunicacion",
    member: "Francis Batallas",
    description: "Conferencia magistral sobre cómo transformar la frialdad comunicativa y los juicios en escucha empática y puentes de confianza duraderos."
  },
  {
    id: "MZhKDt86PX8",
    title: "IA en Educación: Del Miedo a la Oportunidad",
    speaker: "María Agustina Ibañez (TEDxUTNCórdoba)",
    category: "ia",
    member: "Paola Amaguaya",
    description: "Análisis sobre la integración ética y transformadora de las herramientas de inteligencia artificial generativa en procesos formativos."
  },
  {
    id: "p7k58bGm3gE",
    title: "Cerrar el Ciclo de Retroalimentación",
    speaker: "Resilient Roots Organization",
    category: "comunicacion",
    member: "Paola Amaguaya",
    description: "Metodología práctica para procesar y validar que la retroalimentación recibida genere cambios concretos y medibles."
  },
  {
    id: "KgLtGaAiQTA",
    title: "Cómo dar Feedback en el Trabajo (Mejores Pasos)",
    speaker: "Coach Eulàlia Tort",
    category: "coaching",
    member: "Daysi Tipantuña",
    description: "Pautas prácticas de coaching conversacional para orientar a colaboradores hacia soluciones sin adoptar actitudes defensivas."
  },
  {
    id: "E7jEt8f38_w",
    title: "Evaluación del Desempeño 360 Grados",
    speaker: "Ecosistemas Organizacionales Modernos",
    category: "360",
    member: "Fredy Cuichan",
    description: "Explicación dinámica sobre cómo articular la evaluación de superiores, pares, subordinados y la autoevaluación reflexiva."
  },
  {
    id: "DEpUfVxQsiw",
    title: "Comunicación Asertiva y Resolución de Conflictos",
    speaker: "Gestión de Equipos en Crisis",
    category: "comunicacion",
    member: "Dajanara Borbor",
    description: "Estrategias para contener malentendidos en texto plano y liderar espacios síncronos de diálogo restaurativo."
  },
  {
    id: "ZgmSfdE2y-s",
    title: "El Proceso de Comunicación y los Canales Digitales",
    speaker: "Fundamentos Comunicacionales",
    category: "comunicacion",
    member: "Nicole Tonato",
    description: "Desglose del papel activo del emisor, la selección consciente de canales y la eliminación del ruido informativo."
  },
  {
    id: "wY1nFS_8nfw",
    title: "Introducción al Coaching y el Método GROW",
    speaker: "Desarrollo Profesional Continuo",
    category: "coaching",
    member: "Klever López",
    description: "La estructura GROW (Goal, Reality, Options, Will) aplicada a reuniones periódicas 1 a 1 de acompañamiento y liderazgo."
  }
];

const INFOGRAPHICS_DATA = [
  {
    id: "fig-1-1",
    title: "Comparación de Canales: Canales Escritos vs. Videollamadas",
    author: "Nicole Tonato",
    tool: "Diseñado en Canva",
    image: "assets/img/figura_1_1_nicole.png",
    category: "comunicacion",
    description: "Cuadro comparativo visual entre la inmediatez de la videollamada y la constancia formal del correo electrónico y minutas."
  },
  {
    id: "fig-1-2",
    title: "Esquema Visual de Barreras Comunicacionales en la Virtualidad",
    author: "Francis Batallas",
    tool: "Diseño Infográfico",
    image: "assets/img/figura_1_2_francis.jpeg",
    category: "comunicacion",
    description: "Diagnóstico visual de las 4 barreras más críticas: fallas de red, sobrecarga de pantallas, frialdad textual y suposiciones."
  },
  {
    id: "fig-1-3",
    title: "Ciclo de Retroalimentación, Ruido Digital y Uso de la IA",
    author: "Paola Amaguaya",
    tool: "Diseñado en Genially",
    image: "assets/img/figura_1_3_paola.png",
    category: "ia",
    description: "Infografía interactiva que vincula los metaanálisis de sobrecarga informativa (FOMO) con la adopción ética de IA en 2026."
  },
  {
    id: "fig-1-4",
    title: "Flujograma del Caso Práctico: Dinámica y Resolución de Crisis",
    author: "Dajanara Borbor",
    tool: "Modelado Metodológico",
    image: "assets/img/figura_1_4_dajanara.png",
    category: "comunicacion",
    description: "Secuencia lógica de 4 etapas que muestra cómo un liderazgo empático disuelve un conflicto operativo de 48 horas."
  },
  {
    id: "fig-2-1",
    title: "Arquitectura de Evaluación 360°: Los Cuatro Actores Evaluativos",
    author: "Fredy Cuichan",
    tool: "Diseñado en Canva",
    image: "assets/img/figura_2_1_fredy.png",
    category: "360",
    description: "Mapeo concéntrico de las perspectivas evaluativas: Superiores, Pares horizontales, Colaboradores y Autoevaluación formativa."
  }
];

const PREGUNTAS_ICF_DATA = [
  {
    num: "01",
    question: "¿Cuál es el resultado prioritario que deseas alcanzar en este proyecto?",
    purpose: "Claridad de Metas",
    explanation: "Focaliza la energía en el objetivo medible y deseado, evitando que la conversación se desvíe hacia lamentos improductivos."
  },
  {
    num: "02",
    question: "¿Qué alternativas y cursos de acción identificas para superar este obstáculo?",
    purpose: "Autonomía y Creatividad",
    explanation: "Empodera al coachee a explorar opciones por iniciativa propia en lugar de esperar órdenes directivas de la jefatura."
  },
  {
    num: "03",
    question: "¿Qué porcentaje de esta situación depende directamente de tu control y decisión?",
    purpose: "Locus de Control Interno",
    explanation: "Separa las variables externas inmodificables de las acciones concretas donde la persona sí posee poder de decisión."
  },
  {
    num: "04",
    question: "¿Cuáles son los principales frenos que percibes y cómo podemos abordarlos juntos?",
    purpose: "Seguridad Psicológica",
    explanation: "Demuestra respaldo incondicional por parte del líder, normalizando la dificultad sin emitir reproches punitivos."
  },
  {
    num: "05",
    question: "¿Qué fortalezas personales puedes poner al servicio de este desafío?",
    purpose: "Reconocimiento de Competencias",
    explanation: "Conecta a la persona con sus talentos demostrados en el pasado para recuperar autoconfianza y motivación intrínseca."
  },
  {
    num: "06",
    question: "¿Qué apoyo o recursos específicos necesitas del equipo para avanzar con seguridad?",
    purpose: "Articulación Colaborativa",
    explanation: "Detecta a tiempo cuellos de botella de infraestructura, software o acompañamiento antes de que ocurran retrasos."
  },
  {
    num: "07",
    question: "Si analizas el problema desde la perspectiva de tus compañeros, ¿qué nueva oportunidad descubres?",
    purpose: "Empatía Tridimensional",
    explanation: "Estimula la visión sistémica y ayuda a disolver roces interpersonales al comprender los filtros del interlocutor."
  },
  {
    num: "08",
    question: "¿Cómo sabrás con certeza que lograste resolver con éxito esta situación?",
    purpose: "Indicadores de Éxito",
    explanation: "Define criterios tangibles de validación para evaluar el progreso de forma objetiva y transparente."
  },
  {
    num: "09",
    question: "¿Qué aprendizaje valioso obtienes de esta experiencia para enriquecer futuros retos?",
    purpose: "Crecimiento Continuo",
    explanation: "Convierte cualquier error operativo en un activo pedagógico formativo para el desarrollo personal del talento."
  },
  {
    num: "10",
    question: "¿Cuál es la primera acción concreta y medible que iniciarás hoy mismo?",
    purpose: "Paso a la Acción",
    explanation: "Cierra la sesión con un compromiso atómico e inmediato, erradicando la procrastinación y fijando el seguimiento."
  }
];

const REFERENCES_DATA = [
  {
    author: "Bracken, D. W., Timmreck, C. W., & Church, A. H.",
    year: 2001,
    title: "The handbook of multisource feedback: The comprehensive resource for designing and implementing MSF processes",
    source: "Jossey-Bass",
    category: "360",
    doi: ""
  },
  {
    author: "Carlos Tandazo, F., Galarza, F., & Benavides, A.",
    year: 2016,
    title: "La comunicación estratégica digital en las organizaciones públicas de Ecuador: Estado actual y perspectivas",
    source: "Revista Latina de Comunicación Social, (71), 415–432",
    category: "comunicacion",
    doi: "https://doi.org/10.4185/RLCS-2016-1102"
  },
  {
    author: "Chiavenato, I.",
    year: 2020,
    title: "Comportamiento organizacional: La dinámica del éxito en las organizaciones (3.ª ed.)",
    source: "McGraw-Hill Interamericana",
    category: "comunicacion",
    doi: ""
  },
  {
    author: "Davis, K., & Newstrom, J. W.",
    year: 2018,
    title: "Comportamiento humano en el trabajo (13.ª ed.)",
    source: "McGraw-Hill Educación",
    category: "comunicacion",
    doi: ""
  },
  {
    author: "Goleman, D.",
    year: 2015,
    title: "Liderazgo: El poder de la inteligencia emocional",
    source: "Ediciones B",
    category: "liderazgo",
    doi: ""
  },
  {
    author: "Handke, L., Costa, P. L., Berger, R., & O’Shea, D.",
    year: 2022,
    title: "Feedback in virtual teams: A systematic review and research agenda",
    source: "Small Group Research, 53(1), 86–141",
    category: "comunicacion",
    doi: "https://doi.org/10.1177/10464964211041115"
  },
  {
    author: "International Coaching Federation",
    year: 2020,
    title: "Modelo de competencias clave de la ICF",
    source: "ICF Global Standards & Credentials",
    category: "coaching",
    doi: "https://coachingfederation.org/credentials-and-standards/core-competencies"
  },
  {
    author: "Jarosz, J., & Cartor, R.",
    year: 2025,
    title: "Coaching effectiveness framework",
    source: "International Journal of Evidence Based Coaching and Mentoring, 23(1), 49–66",
    category: "coaching",
    doi: "https://doi.org/10.24384/ssyz-ng55"
  },
  {
    author: "Lane, I. V., Gardner, D. G., & Park, R.",
    year: 2024,
    title: "Communication effectiveness in virtual work environments",
    source: "Journal of Management & Organization, 30(2), 245–262",
    category: "comunicacion",
    doi: "https://doi.org/10.1017/jmo.2023.18"
  },
  {
    author: "London, M., & Smither, J. W.",
    year: 1995,
    title: "Can multi-source feedback change perceptions of goal accomplishment, self-efficacy, and performance?",
    source: "Personnel Psychology, 48(4), 803–839",
    category: "360",
    doi: "https://doi.org/10.1111/j.1744-6570.1995.tb01782.x"
  },
  {
    author: "Marsh, E., Perez Vallejos, E., & Spence, A.",
    year: 2024,
    title: "Overloaded by information or worried about missing out on it: A quantitative study of stress, burnout, and mental health implications in the digital workplace",
    source: "SAGE Open, 14(3), Artículo 21582440241268830",
    category: "ia",
    doi: "https://doi.org/10.1177/21582440241268830"
  },
  {
    author: "Mayer, T., & Schwehn, T.-J.",
    year: 2025,
    title: "Moving beyond task efficiency: How generative AI challenges teamwork",
    source: "En ECIS 2025 Proceedings (Artículo 9). AIS Electronic Library",
    category: "ia",
    doi: "https://aisel.aisnet.org/ecis2025/human_ai/human_ai/9"
  },
  {
    author: "Mowat, J. W., Haar, J., & Forsyth, D.",
    year: 2025,
    title: "The impact of formal workplace coaching on employee outcomes: A matched sample analysis",
    source: "Human Resource Development International",
    category: "coaching",
    doi: "https://doi.org/10.1080/13678868.2025.2549541"
  },
  {
    author: "Peiró, J. M., & Soler, A.",
    year: 2020,
    title: "El teletrabajo y la fatiga informática en tiempos de transformación digital",
    source: "Revista de Psicología del Trabajo y de las Organizaciones, 36(3), 189–198",
    category: "comunicacion",
    doi: "https://doi.org/10.5093/jwop2020a19"
  },
  {
    author: "Robbins, S. P., & Judge, T. A.",
    year: 2017,
    title: "Comportamiento organizacional (17.ª ed.)",
    source: "Pearson Educación",
    category: "comunicacion",
    doi: ""
  },
  {
    author: "Sierralta, A.",
    year: 2019,
    title: "Comunicación asertiva para el trabajo en equipo [Video]",
    source: "YouTube / Conferencia TEDx",
    category: "comunicacion",
    doi: "https://www.youtube.com/watch?v=k1t6jS_lOqE"
  },
  {
    author: "Smither, J. W., London, M., Vasilopoulos, N. L., Reilly, R. R., Millsap, R. E., & Salvemini, N.",
    year: 1995,
    title: "An examination of the causes and consequences of multisource feedback",
    source: "Personnel Psychology, 48(1), 1–29",
    category: "360",
    doi: "https://doi.org/10.1111/j.1744-6570.1995.tb01743.x"
  },
  {
    author: "Whitmore, J.",
    year: 2018,
    title: "Coaching para el desarrollo personal y profesional: El método GROW (5.ª ed.)",
    source: "Editorial Paidós",
    category: "coaching",
    doi: ""
  },
  {
    author: "Wietrak, E., Cioca, I., Gifford, J., & Urbano, C.",
    year: 2026,
    title: "PROTOCOL: Multisource feedback and work performance: A systematic review and meta-analysis",
    source: "Campbell Systematic Reviews, 22(2)",
    category: "360",
    doi: "https://doi.org/10.1177/18911803261451264"
  },
  {
    author: "Zyberaj, J.",
    year: 2026,
    title: "Examining the relationship between supervisory feedback characteristics and employee feedback processing: A systematic review and meta-analysis",
    source: "Current Psychology, 45(14), Artículo 1221",
    category: "comunicacion",
    doi: "https://doi.org/10.1007/s12144-026-09323-y"
  }
];
