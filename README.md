# Blog Académico e Interactivo: Habilidades de Comunicación y Coaching

> **Universidad de las Fuerzas Armadas ESPE**  
> **Departamento de Seguridad y Defensa**  
> **Asignatura:** Liderazgo (NRC: 34467)  
> **Docente:** Ing. Edwin Giovanny Puente Moromenacho, EdD.  
> **Período Académico:** 2026-2027  
> **Actividad:** Actividad de Aprendizaje N.º 05 — Grupo A  

---

## 📌 Descripción del Proyecto
Este portal web académico e interactivo fue desarrollado desde cero con tecnologías web nativas para presentar de forma estructurada, dinámica y accesible los tres ejes formativos de la **Actividad 05**:
1. **Proceso de Comunicación en Entornos Digitales y Organizacionales:** Envío, recepción, barreras cotidianas en la virtualidad, ciclo de retroalimentación, ruido digital / infoxicación, adopción ética de IA (enfoque 2026) y resolución de crisis en equipos.
2. **Modelo de Retroalimentación 360 Grados:** Arquitectura del sistema multisource, los cuatro actores evaluativos (superiores, pares, subordinados y autoevaluación), cultura de confianza, caso práctico aplicado en el sector educativo y matriz de mitigación de riesgos.
3. **Retroalimentación Estilo Coaching y Acompañamiento 1 a 1:** Marco de competencias clave de la International Coaching Federation (ICF), decálogo interactivo de preguntas poderosas y metodología práctica de reuniones 1 a 1 en tres momentos bajo el método GROW.
4. **Blog Grupal y Recursos Multimedia:** Reproductores de video embebidos de YouTube y galería interactiva de infografías en alta resolución elaboradas en Canva y Genially.
5. **Muro de Reflexiones de los 8 Integrantes:** Perspectivas individuales y autoevaluación de la sinergia colaborativa.
6. **Biblioteca Bibliográfica APA 7:** Buscador y filtrador en tiempo real de las 20 fuentes científicas actualizadas.

---

## 👥 Integrantes del Grupo A

| N.º | Integrante | Carrera Universitaria | Rol en la Actividad |
| :---: | :--- | :--- | :--- |
| 1 | **Nicole Estefania Tonato Tonato** | Educación Básica | Investigadora & Redactora (Apartado 1.1) |
| 2 | **Francis Alejandro Batallas Izurieta** | Educación Básica | Compilador General & Redactor (Apartado 1.2) |
| 3 | **Paola Estephania Amaguaya Galeas** | Educación Inicial | Investigadora Académica & Redactora (Apartado 1.3) |
| 4 | **Dajanara Belem Borbor Limones** | Pedagogía en Idiomas Nacionales y Extranjeros | Diseñadora Metodológica & Redactora (Apartado 1.4) |
| 5 | **Fredy Esau Cuichan Bautista** | Educación Básica | Analista 360° & Redactor (Apartado 2.1) |
| 6 | **Ariel Anabel Taco Coque** | Educación Inicial | Analista de Caso 360° & Redactora (Apartado 2.2) |
| 7 | **Daysi Cristina Tipantuña Montalvo** | Pedagogía en Idiomas Nacionales y Extranjeros | Investigadora ICF & Redactora (Apartado 3.1) |
| 8 | **Klever Josué López Quilligana** | Tecnologías de la Información | Arquitecto Web, Programador & Redactor (Apartado 3.2) |

---

## 🛠️ Arquitectura y Tecnologías
* **Frontend:** HTML5 Semántico + Tailwind CSS (v3) + Vanilla JavaScript (ES6 modular).
* **Tipografía:** *Plus Jakarta Sans* (lectura moderna) y *Lora* (citas editoriales).
* **Interactividad:**
  * Selector dinámico de los cuatro cuadrantes de evaluación 360°.
  * Acordeón interactivo del decálogo de preguntas poderosas ICF.
  * Buscador en vivo de referencias bibliográficas bajo Normas APA 7.ª Edición.
  * Visor Lightbox para ampliación de recursos infográficos.
  * Modo claro / oscuro persistente con `localStorage`.
  * Barra de progreso de lectura en tiempo real.
* **Alojamiento:** Repositorio en GitHub y despliegue continuo en Vercel.

---

## 🚀 Despliegue y Ejecución Local

### Ejecución Local:
No requiere instalación de dependencias pesadas ni compilación. Simplemente abre `index.html` en cualquier navegador web moderno, o ejecuta un servidor estático:

```bash
# Opción con Python:
python -m http.server 3000

# O con Node / npx:
npx serve .
```

### Despliegue en Vercel:
El proyecto está optimizado para despliegue instantáneo conectando el repositorio de GitHub:
1. Conectar el repositorio `https://github.com/Klopezxd/liderazgo-coaching-blog.git` en Vercel.
2. Framework Preset: **Other**.
3. Output Directory: `./`.
4. El archivo `vercel.json` ya incluye las políticas de cabeceras seguras y rutas limpias.
