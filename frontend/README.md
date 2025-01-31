# EventHub - Gestor de Eventos

![EventHub Preview](https://images.unsplash.com/photo-1566737236500-c8ac43014a67)

Plataforma moderna para descubrir, gestionar y participar en eventos. Desarrollada con React, TypeScript y Tailwind CSS.

## Características Principales 🚀

- ✅ Creación y gestión de eventos (CRUD completo)
- 🔒 Autenticación de usuarios (Registro/Login)
- 🌓 Modo oscuro/claro integrado
- 🔍 Sistema avanzado de filtrado (ubicación, fecha, búsqueda)
- 📱 Diseño responsive para todos los dispositivos
- 🗂️ Dos modos de visualización: Lista y Grid
- 📅 Gestión de fechas y horarios de eventos
- 🛡️ Rutas protegidas y manejo de sesiones

## Tecnologías Utilizadas 🛠️

- **Frontend**:
  ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwind-css&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-B73BFE?logo=vite&logoColor=white)

- **Estado Global**: Context API
- **Enrutamiento**: React Router v6
- **HTTP Client**: Axios
- **Iconos**: Lucide React
- **Formularios**: React Hook Form

## Estructura del Proyecto 📂

```plaintext
└── 📁frontend
    └── 📁public
        └── vite.svg
    └── 📁src
        └── 📁api
            └── Events.ts
            └── User.ts
        └── App.tsx
        └── 📁components
            └── Error.tsx
            └── EventCard.tsx
            └── EventDetail.tsx
            └── EventForm.tsx
            └── Filters.tsx
            └── Footer.tsx
            └── Header.tsx
            └── Loading.tsx
            └── Modal.tsx
            └── UserProfile.tsx
        └── 📁config
            └── axios.ts
        └── 📁context
            └── AuthContext.tsx
            └── EventsContext.tsx
        └── 📁hooks
            └── useAuth.tsx
            └── useEvents.tsx
        └── index.css
        └── 📁layouts
            └── Layout.tsx
        └── main.tsx
        └── 📁pages
            └── Error404.tsx
            └── EventsPage.tsx
            └── HomePage.tsx
            └── LoginPage.tsx
            └── RegisterPage.tsx
        └── 📁routes
            └── ProtectedRoute.tsx
            └── Router.tsx
        └── 📁types
            └── index.ts
        └── vite-env.d.ts
    └── .env.local
    └── .gitignore
    └── .prettierrc
    └── eslint.config.js
    └── index.html
    └── package-lock.json
    └── package.json
    └── README.md
    └── tsconfig.app.json
    └── tsconfig.json
    └── tsconfig.node.json
    └── vite.config.ts
```

## Instalación y Uso ⚙️

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/eventhub.git
   cd frontend
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   Crear archivo `.env` con:

   ```env
   VITE_REACT_APP_API_ENV=http://localhost:4000/api
   ```

4. **Iniciar la aplicación**

   ```bash
   npm run dev
   ```

5. **Acceder a la aplicación**
   Abrir en el navegador: `http://localhost:5173`

## Capturas de Pantalla 📸

| Modo Claro                          | Modo Oscuro                         |
| ----------------------------------- | ----------------------------------- |
| ![Modo Claro](screenshot-light.png) | ![Modo Oscuro](screenshot-dark.png) |

## Componentes Clave 🧩

- **EventCard**: Tarjeta interactiva para mostrar eventos
- **EventForm**: Formulario para creación/edición de eventos
- **Filters**: Sistema de filtrado avanzado
- **AuthContext**: Manejo de autenticación de usuarios
- **ProtectedRoute**: Sistema de rutas protegidas

## Licencia 📄

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.
