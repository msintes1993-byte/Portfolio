# Case Study Template Documentation

## Overview
El `CaseStudyTemplate` es un componente reutilizable y flexible para presentar casos de estudio de diseño UX/UI en tu portfolio. Sigue la estética brutalista industrial del sistema de diseño con variables CSS personalizadas.

## Características
- ✅ Layout responsive con breakpoints mobile/tablet/desktop
- ✅ Secciones modulares configurables
- ✅ Layouts de imágenes flexibles (single, double, triple)
- ✅ Métricas de resultados destacadas
- ✅ Navegación entre proyectos
- ✅ Animaciones y sombras siguiendo Guidelines.md
- ✅ Usa variables CSS del sistema de diseño

## Estructura del Componente

### Props del Template

```typescript
interface CaseStudyData {
  id: string;                    // Identificador único del proyecto
  title: string;                 // Título principal (ej: "DESIGN SYSTEM")
  subtitle: string;              // Subtítulo descriptivo
  glyphs: string;                // Indicadores técnicos del proyecto
  heroImage: string;             // Imagen hero principal (aspect-ratio 16:9)
  role: string;                  // Tu rol en el proyecto
  timeline: string;              // Duración del proyecto (ej: "6 months (2023)")
  tools: string[];               // Array de herramientas usadas
  overview: string;              // Descripción general del proyecto
  challenge: string;             // Problema o desafío principal
  solution: string;              // Solución implementada
  sections: CaseStudySection[];  // Secciones dinámicas del caso
  results?: {                    // Métricas de impacto (opcional)
    metrics: { label: string; value: string }[];
  };
  nextProject?: {                // Proyecto siguiente (opcional)
    id: string;
    title: string;
  };
}

interface CaseStudySection {
  title: string;                 // Título de la sección
  content: string;               // Contenido/descripción
  images?: string[];             // Array de imágenes (opcional)
  layout?: 'single' | 'double' | 'triple';  // Layout de imágenes
}
```

## Cómo Crear un Nuevo Caso de Estudio

### Paso 1: Crea un nuevo archivo de componente

Crea `/src/app/components/TuProyectoCaseStudy.tsx`:

```typescript
import { CaseStudyTemplate } from './CaseStudyTemplate';
import { GLYPH_SETS } from './TechnicalGlyphIndicator';

interface CaseStudyPageProps {
  onBack?: () => void;
  onNextProject?: (id: string) => void;
}

export function TuProyectoCaseStudy({ onBack, onNextProject }: CaseStudyPageProps) {
  const caseStudyData = {
    id: '06',
    title: 'TU PROYECTO',
    subtitle: 'Descripción breve',
    glyphs: GLYPH_SETS.system, // o .platform, .dashboard, .projects
    heroImage: 'URL_DE_TU_IMAGEN',
    role: 'Product Designer',
    timeline: '4 months (2024)',
    tools: ['Figma', 'React', 'TypeScript'],
    overview: 'Descripción general...',
    challenge: 'El problema principal...',
    solution: 'La solución que implementaste...',
    sections: [
      {
        title: 'RESEARCH',
        content: 'Descripción de tu investigación...',
        images: ['url1.jpg', 'url2.jpg'],
        layout: 'double' // 2 columnas
      },
      {
        title: 'DESIGN PROCESS',
        content: 'Tu proceso de diseño...',
        images: ['url3.jpg'],
        layout: 'single' // 1 columna ancha
      },
      {
        title: 'PROTOTYPING',
        content: 'Prototipos y testing...',
        images: ['url4.jpg', 'url5.jpg', 'url6.jpg'],
        layout: 'triple' // 3 columnas
      }
    ],
    results: {
      metrics: [
        { label: 'USER SATISFACTION', value: '95%' },
        { label: 'TASK COMPLETION', value: '+45%' },
        { label: 'TIME ON TASK', value: '-30%' }
      ]
    },
    nextProject: {
      id: '07',
      title: 'SIGUIENTE PROYECTO'
    }
  };

  return <CaseStudyTemplate data={caseStudyData} onBack={onBack} onNextProject={onNextProject} />;
}
```

### Paso 2: Personaliza las secciones

Puedes crear cualquier número de secciones. Ejemplos de secciones comunes:

- **RESEARCH & DISCOVERY**: User interviews, competitive analysis, personas
- **PROBLEM DEFINITION**: Pain points, user needs, business goals
- **IDEATION**: Sketches, workshops, concept exploration
- **DESIGN PROCESS**: Wireframes, mockups, iterations
- **PROTOTYPING**: Interactive prototypes, usability testing
- **IMPLEMENTATION**: Handoff, collaboration with developers
- **RESULTS & IMPACT**: Metrics, user feedback, business outcomes

### Paso 3: Layouts de imágenes

Elige el layout según tu contenido:

```typescript
// Una imagen grande (full-width)
{ layout: 'single', images: ['image1.jpg'] }

// Dos imágenes lado a lado
{ layout: 'double', images: ['image1.jpg', 'image2.jpg'] }

// Tres imágenes en grid
{ layout: 'triple', images: ['image1.jpg', 'image2.jpg', 'image3.jpg'] }

// Sin imágenes (solo texto)
{ layout: undefined, images: undefined }
```

## Personalización Avanzada

### Modificar el Layout Global

Puedes crear variaciones del template editando `CaseStudyTemplate.tsx`:

**Ejemplo 1: Hero con texto superpuesto**
```typescript
// Reemplaza la sección "Hero Image" (línea ~153)
<div className="relative w-full border border-border overflow-hidden">
  <ImageWithFallback src={data.heroImage} />
  <div className="absolute bottom-0 left-0 right-0 p-[40px] bg-gradient-to-t from-black/80 to-transparent">
    <h2 className="text-background">{data.subtitle}</h2>
  </div>
</div>
```

**Ejemplo 2: Grid de Overview/Challenge en 3 columnas**
```typescript
// Modifica la sección "Overview Section" (línea ~167)
<div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
  <div>...</div>  {/* Overview */}
  <div>...</div>  {/* Challenge */}
  <div>...</div>  {/* Tu nueva columna */}
</div>
```

**Ejemplo 3: Añadir video embebido**
```typescript
// En cualquier sección, añade:
{section.videoUrl && (
  <div className="aspect-video border border-border overflow-hidden">
    <iframe 
      src={section.videoUrl} 
      className="w-full h-full"
      allowFullScreen
    />
  </div>
)}
```

### Modificar Colores de Acento

Diferentes proyectos pueden usar diferentes colores de acento:

```typescript
// En tu archivo de caso específico, añade estilos inline:
<h2 
  className="border-b border-accent"  // Usa accent en vez de primary/destructive
  style={{ borderColor: '#00FF00' }}   // O un color custom
>
  // TÍTULO
</h2>
```

### Añadir Secciones Custom

Puedes añadir secciones completamente nuevas entre las existentes:

```typescript
// Después de las "Dynamic Sections" en CaseStudyTemplate.tsx:

{/* Custom Section: Process Timeline */}
<div className="mb-[120px]">
  <h2>// PROJECT TIMELINE</h2>
  <div className="space-y-[24px]">
    {data.timeline.map((event, i) => (
      <div key={i} className="flex gap-[24px] border-l-2 border-primary pl-[24px]">
        <span>{event.date}</span>
        <p>{event.description}</p>
      </div>
    ))}
  </div>
</div>
```

## Mejores Prácticas

1. **Imágenes**: Usa aspect-ratio consistente (16:9 para hero, 4:3 para secciones)
2. **Texto**: Mantén párrafos entre 50-75 caracteres por línea para legibilidad
3. **Secciones**: 4-6 secciones es óptimo (más puede ser abrumador)
4. **Métricas**: Usa números concretos y contexto claro
5. **Navegación**: Siempre incluye `onBack` y `nextProject` para fluidez

## Variables CSS Usadas

El template usa estas variables del sistema de diseño:

### Colores
- `--foreground`: Texto principal
- `--background`: Fondo general
- `--card`: Superficies/contenedores
- `--primary`: Acción primaria (naranja)
- `--destructive`: Acento rojo
- `--accent`: Acento secundario
- `--border`: Bordes estructurales
- `--muted-foreground`: Texto secundario

### Tipografía
- `--font-family-headers`: Michroma (títulos)
- `--font-family-body`: Satoshi (cuerpo)
- `--text-h1`, `--text-h2`, `--text-h3`: Tamaños de headers
- `--text-p`: Tamaño de párrafo (20px)
- `--text-label`: Labels (14px)
- `--text-button`: Botones (20px)

### Espaciado y Efectos
- `--elevation-sm`: Sombra dura (4px 4px 0px Black)
- `--radius`: Bordes (0px, sin redondeo)
- Spacing: Múltiplos de 8 (8px, 16px, 24px, 32px, 40px, etc.)

## Ejemplos de Referencia

Ver archivos de ejemplo:
- `/src/app/components/DesignSystemCaseStudy.tsx` - Layout estándar
- `/src/app/components/EcommerceCaseStudy.tsx` - Layout alternativo

## Soporte

Para modificaciones más complejas o preguntas sobre el template, consulta:
- `Guidelines.md`: Reglas del sistema de diseño
- `/src/styles/theme.css`: Variables CSS disponibles
