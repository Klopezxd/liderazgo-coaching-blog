/**
 * DATA STORE - BLOG GRUPAL LIDERAZGO & COACHING
 * Universidad de las Fuerzas Armadas ESPE
 * Asignatura: Liderazgo (NRC: 34467)
 */

const TEAM_MEMBERS = [
  {
    name: "Nicole Estefania Tonato Tonato",
    career: "Educación Básica",
    topic: "Envío del mensaje y selección de canales",
    reflection: "La digitalización ha transformado sustancialmente los canales y dinámicas de interacción humana, posibilitando el intercambio instantáneo de información y conectando actores dispersos geográficamente. En el contexto de proyectos educativos y organizacionales, las herramientas tecnológicas permiten coordinar responsabilidades de forma ágil mediante entornos colaborativos. No obstante, como advierten Carlos Tandazo et al. (2016), este paradigma entraña desafíos notables, particularmente la atenuación del contacto visual cara a cara y el riesgo de distorsión en los mensajes escritos. La tecnología debe gestionarse como un puente que optimiza la eficiencia, manteniendo siempre como cimiento el respeto, la calidez y la empatía."
  },
  {
    name: "Francis Alejandro Batallas Izurieta",
    career: "Educación Básica",
    topic: "Recepción, filtros emocionales y barreras comunicacionales",
    reflection: "En las dinámicas híbridas actuales, los esquemas de jefatura rígidos e impersonales han quedado obsoletos. Las organizaciones demandan líderes facilitadores, cuya principal virtud radica en edificar confianza mutua mediante una comunicación transparente y cercana. Un líder eficaz domina la escucha activa libre de juicios precipitados, comprende los desafíos particulares de su equipo, imparte directrices claras y accesibles, y reconoce los logros oportunamente mientras aborda los desacuerdos en privado con respeto. La humildad para recibir retroalimentación constructiva sobre el propio desempeño constituye la clave para sostener la unidad de los equipos."
  },
  {
    name: "Paola Estephania Amaguaya Galeas",
    career: "Educación Inicial",
    topic: "Ciclo de feedback, sobrecarga informativa e IA",
    reflection: "El coaching impulsa el desarrollo del talento porque reemplaza la imposición unidireccional por un acompañamiento respetuoso y estimulante. Mediante interrogantes orientadas al descubrimiento personal, el orientador facilita que el colaborador identifique sus competencias, dimensione sus brechas y formule cursos de acción propios (Jarosz & Cartor, 2025). Investigaciones empíricas como la de Mowat et al. (2025) ratifican que el coaching formal genera un mayor sentido de pertenencia y compromiso laboral. Su valor esencial reside en emancipar las capacidades del individuo, promoviendo la autonomía decisional y la corresponsabilidad profesional."
  },
  {
    name: "Dajanara Belem Borbor Limones",
    career: "Pedagogía de los Idiomas Nacionales y Extranjeros",
    topic: "Caso práctico y resolución de conflictos en equipos",
    reflection: "La virtualidad impone desafíos relacionales de consideración. En primer lugar, se manifiesta un distanciamiento interpersonal que debilita la confianza espontánea. En segundo lugar, la preponderancia de canales escritos planos suscita interpretaciones erróneas de frialdad o susceptibilidad (Robbins & Judge, 2017). Asimismo, las sesiones remotas con cámaras inactivas generan silencios que dificultan constatar la asimilación del mensaje. Finalmente, la exposición continua a pantallas induce a la fatiga cognitiva e infoxicación (Peiró & Soler, 2020). Superar estos retos exige líderes que resguarden la seguridad psicológica y complementen las directrices breves con espacios síncronos empáticos."
  },
  {
    name: "Fredy Esau Cuichan Bautista",
    career: "Educación Básica",
    topic: "Fundamentos y actores del modelo 360°",
    reflection: "A lo largo de la actividad se evidenció que la comunicación en entornos digitales es el pilar que sostiene la productividad y la cohesión de los equipos de trabajo (Lane et al., 2024). Las plataformas tecnológicas abren enormes posibilidades de articulación remota, pero también pueden generar barreras si no se establecen protocolos claros de interacción. Asimismo, se confirmó que el intercambio de retroalimentación oportuna en ambientes virtuales resulta indispensable para efectuar ajustes operativos y alcanzar los propósitos del equipo (Handke et al., 2022), fundamentado siempre en el respeto y la corresponsabilidad."
  },
  {
    name: "Ariel Anabel Taco Coque",
    career: "Educación Inicial",
    topic: "Caso aplicado 360° y gestión de riesgos",
    reflection: "La articulación entre el modelo 360° y las competencias conversacionales del coaching constituyó un aprendizaje medular. El ejercicio evidenció que la evaluación multisource pierde su propósito si se percibe como una fiscalización punitiva; por el contrario, cobra valor pedagógico cuando sus resultados se transforman en insumos para un diálogo de coaching formativo. El líder debe facilitar un clima de confidencialidad y confianza donde el colaborador pueda examinar sus áreas de oportunidad sin temores, asumiendo compromisos medibles de desarrollo profesional que fortalezcan la madurez organizacional."
  },
  {
    name: "Daysi Cristina Tipantuña Montalvo",
    career: "Pedagogía de los Idiomas Nacionales y Extranjeros",
    topic: "Marco de la ICF y preguntas poderosas",
    reflection: "La comunicación en los escenarios organizacionales y educativos actuales representa el motor que permite gestionar el cambio, mitigar la incertidumbre y consolidar la sinergia grupal. Trascendiendo la mera transferencia instrumental de directrices, la comunicación asertiva promueve una cultura de apertura, reciprocidad y escucha activa. Cuando los miembros de un equipo se sienten genuinamente escuchados y respaldados, las dificultades operativas se resuelven con agilidad y se potencia el compromiso colectivo."
  },
  {
    name: "Klever Josué López Quilligana",
    career: "Ingeniería en Tecnologías de la Información",
    topic: "Acompañamiento en reuniones 1 a 1 y arquitectura web",
    reflection: "El desarrollo de esta actividad permitió consolidar un espacio de trabajo colaborativo basado en la responsabilidad compartida, el respeto mutuo y la comunicación continua. Al contar con distintas perspectivas y experiencias formativas dentro del grupo, se logró enriquecer el análisis de los temas planteados, integrando aportes complementarios tanto en la parte conceptual como en la resolución de los casos prácticos y el diseño del entorno digital. A lo largo del proceso se mantuvo un diálogo fluido que facilitó coordinar las entregas, resolver dudas oportunamente y apoyar a los compañeros en las distintas fases. Esta experiencia de trabajo en equipo no solo permitió cumplir con los objetivos académicos, sino que también sirvió para poner en práctica principios fundamentales como la empatía, la escucha activa y el liderazgo participativo."
  }
];

const VIDEOS_DATA = [
  {
    id: "7uygpZkVHH0",
    title: "Comunicación para el trabajo en equipo",
    speaker: "Alejandro Sierralta (Conferencia TEDxUniNacionalIngeniería)",
    category: "comunicacion",
    description: "Conferencia magistral sobre las habilidades blandas, estilos de procesamiento cerebral y cómo construir puentes de confianza duraderos frente a la automatización."
  },
  {
    id: "MZhKDt86PX8",
    title: "IA en Educación: Del Miedo a la Oportunidad",
    speaker: "María Agustina Ibañez (TEDxUTNCórdoba)",
    category: "ia",
    description: "Análisis sobre la integración ética y pedagógica de los modelos de inteligencia artificial generativa en entornos formativos y colaborativos."
  },
  {
    id: "p7k58bGm3gE",
    title: "Cerrar el Ciclo de Retroalimentación",
    speaker: "Resilient Roots Organization",
    category: "comunicacion",
    description: "Metodología práctica para verificar que el feedback recibido sea procesado y se traduzca en cambios verificables en el equipo."
  },
  {
    id: "KgLtGaAiQTA",
    title: "Cómo dar Feedback en el Trabajo: Pasos Clave",
    speaker: "Coach Eulàlia Tort",
    category: "coaching",
    description: "Pautas de coaching conversacional para orientar a colaboradores hacia soluciones concretas sin activar posturas defensivas."
  },
  {
    id: "E7jEt8f38_w",
    title: "Evaluación del Desempeño 360 Grados",
    speaker: "Ecosistemas Organizacionales",
    category: "360",
    description: "Dinámica y propósito de articular valoraciones de superiores, pares horizontales, colaboradores y la autoevaluación reflexiva."
  },
  {
    id: "DEpUfVxQsiw",
    title: "Comunicación Asertiva y Resolución de Conflictos",
    speaker: "Gestión de Equipos en Crisis",
    category: "comunicacion",
    description: "Estrategias para contener malentendidos generados por mensajes escritos en texto plano y abrir canales de diálogo síncrono."
  },
  {
    id: "ZgmSfdE2y-s",
    title: "El Proceso de Comunicación y los Canales Digitales",
    speaker: "Fundamentos Comunicacionales",
    category: "comunicacion",
    description: "Desglose de la intencionalidad del emisor, la decodificación activa del receptor y la selección deliberada de canales."
  },
  {
    id: "wY1nFS_8nfw",
    title: "Coaching y el Método GROW en la Práctica",
    speaker: "Desarrollo del Talento Humano",
    category: "coaching",
    description: "La estructura GROW (Meta, Realidad, Opciones y Compromiso) aplicada a sesiones individuales de acompañamiento periódico."
  }
];

const PREGUNTAS_ICF_DATA = [
  {
    num: "01",
    question: "¿Cuál es el resultado prioritario que deseas alcanzar en este proyecto?",
    purpose: "Claridad de Metas",
    explanation: "Focaliza la energía en un objetivo concreto y deseado, evitando que la conversación se disperse en lamentos improductivos."
  },
  {
    num: "02",
    question: "¿Qué alternativas y cursos de acción identificas para superar este obstáculo?",
    purpose: "Autonomía y Creatividad",
    explanation: "Empodera a la persona para que explore opciones por iniciativa propia en lugar de esperar directrices unilaterales."
  },
  {
    num: "03",
    question: "¿Qué parte de esta situación depende directamente de tu control y decisión?",
    purpose: "Locus de Control Interno",
    explanation: "Distingue los factores externos inmodificables de aquellas variables concretas donde sí existe margen de acción."
  },
  {
    num: "04",
    question: "¿Cuáles son los principales frenos que percibes y cómo podemos abordarlos juntos?",
    purpose: "Seguridad Psicológica",
    explanation: "Evidencia respaldo por parte de quien orienta, normalizando las dificultades sin emitir juicios sancionatorios."
  },
  {
    num: "05",
    question: "¿Qué fortalezas personales puedes poner al servicio de este desafío?",
    purpose: "Reconocimiento de Competencias",
    explanation: "Conecta a la persona con talentos demostrados en experiencias previas para reconstruir la autoconfianza profesional."
  },
  {
    num: "06",
    question: "¿Qué apoyo o recursos específicos necesitas del equipo para avanzar con seguridad?",
    purpose: "Articulación Colaborativa",
    explanation: "Detecta a tiempo cuellos de botella de herramientas, información o coordinación antes de que se generen retrasos."
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
    purpose: "Criterios de Verificación",
    explanation: "Define indicadores observables para valorar el progreso de manera transparente y constructiva."
  },
  {
    num: "09",
    question: "¿Qué aprendizaje valioso obtienes de esta experiencia para enriquecer futuros retos?",
    purpose: "Crecimiento Continuo",
    explanation: "Transforma los incidentes cotidianos en activos pedagógicos para el desarrollo formativo del talento humano."
  },
  {
    num: "10",
    question: "¿Cuál es la primera acción concreta y medible que iniciarás hoy mismo?",
    purpose: "Compromiso Inmediato",
    explanation: "Cierra el diálogo con un paso concreto y alcanzable, facilitando el seguimiento y la responsabilidad compartida."
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
    title: "Comunicación para el trabajo en equipo [Video]",
    source: "YouTube / Conferencia TEDxUniNacionalIngeniería",
    category: "comunicacion",
    doi: "https://www.youtube.com/watch?v=7uygpZkVHH0"
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
