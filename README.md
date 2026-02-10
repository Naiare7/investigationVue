# Investigation Vue

Proyecto educativo para aprender y explorar los conceptos fundamentales de Vue.js 3 a través de ejemplos interactivos y navegables.

## Autores

- **Yoandres** - [Perfil de github](https://github.com/ylcruzdev)
- **Naia** - [Perfil de github](https://github.com/Naiare7)  
- **Ramiro** - [Perfil de github](https://github.com/ramironavas)

## 📚 Descripción del Proyecto

`InvestigationVue` es un laboratorio de aprendizaje interactivo diseñado para dominar Vue.js 3 con Composition API. Cada concepto está aislado en su propia ruta con ejemplos prácticos que puedes explorar y modificar en tiempo real.

### 🎯 Objetivos

- Aprender Vue.js 3 mediante ejemplos prácticos
- Entender el sistema de reactividad moderno
- Dominar patrones de comunicación entre componentes
- Explorar características avanzadas de Vue.js

## 🚀 Conceptos Vue.js Demostrados

### Sistema de Reactividad
- **`reactive()`** - Objetos reactivos con reactividad profunda
- **`ref()`** - Valores primitivos reactivos
- **`toRefs()`** - Desestructuración manteniendo reactividad
- **`shallowRef()` / `shallowReactive()`** - Optimización de rendimiento

### Propiedades Computadas
- Computed properties de solo lectura
- Computed properties escribibles
- Cálculos dinámicos y automáticos

### Sistema de Watch
- **`watch()`** - Vigilancia de fuentes únicas y múltiples
- **`watchEffect()`** - Efectos automáticos
- Comparación con computed properties

### Ciclo de Vida de Componentes
- **`onMounted()`** - Configuración inicial
- **`onUnmounted()`** - Limpieza de recursos
- Hooks completos del ciclo de vida

### Comunicación entre Componentes
- **Parent-Child** - Props y eventos
- **Provide/Inject** - Comunicación multi-nivel
- Patrones avanzados de comunicación

### Sistema de Slots
- **Default Slots** - Inserción básica de contenido
- **Named Slots** - Múltiples puntos de inserción
- **Scoped Slots** - Paso de datos desde hijo a padre

### Características Avanzadas
- **Teleport** - Renderizado fuera del jerarquía de componentes
- **Vue Router** - Navegación y rutas dinámicas

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── common/ # Componentes reutilizables
│   ├── exampleLifeCycle/ # Ejemplos de ciclo de vida
│   ├── exampleParentChild/ # Comunicación parent-child
│   ├── exampleProvideInject/ # Patrones provide/inject
│   ├── exampleReactive/   # Sistema de reactividad
│   ├── exampleSlot/       # Sistema de slots
│   ├── exampleTeleport/   # Ejemplos de teleport
│   ├── exampleWatch/      # Sistema de watch
│   └── NavSidebar.vue    # Navegación principal
├── views/                # Componentes contenedor para rutas
├── router/               # Configuración de Vue Router
├── assets/              # Estilos y recursos estáticos
└── App.vue              # Componente raíz
```

## 🛠️ Instalación y Configuración

### Requisitos Previos

- Node.js `^20.19.0 || >=22.12.0`
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>

# Entrar al directorio
cd investigationVue

# Instalar dependencias
npm install
```

### Scripts Disponibles

```bash
# Desarrollo con hot-reload
npm run dev

# Build para producción
npm run build

# Preview del build de producción
npm run preview
```

## 🌐 Despliegue en Producción

### Build y Deploy

El proyecto está optimizado para despliegue en plataformas modernas como Netlify, Vercel o GitHub Pages.

```bash
# Generar versión de producción
npm run build
```

El comando `npm run build` crea una carpeta `dist/` con todos los archivos optimizados y listos para producción.

### 🚀 Demo en Vivo

Puedes explorar el proyecto en vivo en el siguiente enlace:

**[https://investigation-vue.netlify.app/](https://investigation-vue.netlify.app/)**

Esta demostración en línea te permite:
- Probar todos los ejemplos interactivos
- Navegar por los diferentes conceptos
- Experimentar con el funcionamiento de cada característica
- Ver el proyecto en un entorno de producción real

### Configuración de Deploy

Para desplegar en Netlify:
1. Conecta tu repositorio GitHub a Netlify
2. Configura el comando de build: `npm run build`
3. Establece el directorio de publicación: `dist`
4. Despliega automáticamente con cada push a main

## 🎮 Uso y Navegación

### Explorando los Ejemplos

1. Inicia el servidor de desarrollo con `npm run dev`
2. Usa la barra lateral de navegación para explorar conceptos
3. Cada ruta contiene un ejemplo interactivo
4. Revisa el código fuente para entender la implementación

### Flujo de Aprendizaje Recomendado

1. **Fundamentos** → Reactive, Ref, Computed
2. **Reactividad Avanzada** → Watch, Shallow Reactivity
3. **Comunicación** → Parent-Child, Provide/Inject
4. **Componentes Avanzados** → Slots, Teleport
5. **Ciclo de Vida** → Lifecycle Hooks

## ⚙️ Características Técnicas

### Stack Tecnológico

- **Vue.js 3.5.26** - Framework principal con Composition API
- **Vue Router 4.6.4** - Sistema de rutas
- **Vite 7.3.1** - Build tool y servidor de desarrollo
- **Material Icons 1.13.14** - Iconos de Material Design

### Herramientas de Desarrollo

- **Vue Devtools** - Depuración de componentes
- **Hot Module Replacement** - Recarga en caliente
- **TypeScript Ready** - Configuración para TypeScript

## 🎨 Características de Diseño

- **Interfaz en Español** - Accesibilidad para desarrolladores hispanohablantes
- **Material Design** - Iconos y componentes consistentes
- **Layout Responsivo** - Flexbox con espaciado adecuado
- **Navegación Intuitiva** - Sidebar colapsable con iconos

## 📖 Para Quién es Este Proyecto

### 👶 Principiantes
- Fundamentos de Vue 3 y Composition API
- Sintaxis de plantillas y directivas
- Estructura básica de componentes

### 🚀 Desarrolladores Intermedios
- Patrones avanzados de reactividad
- Comunicación entre componentes
- Técnicas de optimización

### 🎯 Todos los Niveles
- Ejemplos prácticos e interactivos
- Implementaciones completas
- Mejores prácticas de desarrollo

## 🔧 Configuración Recomendada

### IDE Setup

- **VS Code** + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- Deshabilitar Veter para evitar conflictos

### Navegador

- **Vue.js devtools** para Chrome/Firefox
- Activar Custom Object Formatter en DevTools

## 🤝 Contribución

Este proyecto es un recurso educativo abierto. Siéntete libre de:

- Explorar y modificar los ejemplos
- Sugerir nuevos conceptos para demostrar
- Reportar problemas o mejoras
- Compartir tu experiencia de aprendizaje

## 📄 Licencia

Proyecto educativo de código abierto. Ver archivo LICENSE para más detalles.

---

**¡Feliz aprendizaje y exploración de Vue.js! 🚀**