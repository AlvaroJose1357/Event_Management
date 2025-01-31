# Aplicación de Gestión de Eventos

Esta es una aplicación full-stack para gestionar eventos. Permite a los usuarios registrarse, iniciar sesión, crear eventos, filtrarlos, actualizarlos y eliminarlos. El proyecto está dividido en dos partes principales: el **backend** (construido con Node.js, Express, Typescript y MongoDB) y el **frontend** (construido con React, TypeScript, Tailwind, Heroicons, Lucide, Toastify, etc).

---

## **Tabla de Contenidos**

1. [Instalación y Configuración](#instalación-y-configuración)
2. [Documentación del Backend](#documentación-del-backend)
3. [Documentación del Frontend](#documentación-del-frontend)
4. [Funcionalidades Principales](#funcionalidades-principales)
5. [Licencia](#licencia)

---

## **Instalación y Configuración**

Sigue estos pasos para configurar y ejecutar la aplicación:

### **Backend**

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/AlvaroJose1357/Event_Management
   cd Event_Management/backend
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**

   - Crea un archivo `.env` en la raíz del proyecto.
   - Agrega las siguientes variables:
     ```env
     MONGO_URL=<tu-cadena-de-conexión-de-mongodb>
     PORT=5000
     JWT_SECRET=<tu-clave-secreta-para-jwt>
     ORIGIN=<tu servidor del Frontend>
     ```

4. **Ejecutar el servidor:**

   ```bash
   npm run dev
   ```

   El servidor estará disponible en `http://localhost:5000`.

   Para más detalles, consulta la [Documentación del Backend](./backend/README.md).

### **Frontend**

1. **Clonar el repositorio:**

   ```bash
   cd Event_Management/frontend
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**

   - Crea un archivo `.env` en la raíz del proyecto.
   - Agrega las siguientes variables:
     ```env
     VITE_REACT_APP_API_ENV = http://localhost:5000/api
     ```

4. **Ejecutar el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:5173`.

   Para más detalles, consulta la [Documentación del Frontend](./frontend/README.md).

---

## **Documentación del Backend**

El backend de la aplicación está construido con **Node.js**, **Express** y **MongoDB**. Proporciona una API RESTful para gestionar la autenticación de usuarios y la creación, lectura, actualización y eliminación de eventos.

### **Estructura del Proyecto**

- **`src/`**: Carpeta principal de los archivos.
- **`config/`**: Configuraciones generales de la app
- **`controllers/`**: Lógica para manejar autenticación y eventos.
- **`middleware/`**: Middleware para autenticación.
- **`models/`**: Esquemas de MongoDB para usuarios y eventos.
- **`routes/`**: Definición de rutas para la API.
- **`server.js`**: Configuración y ejecución del servidor.

### **Endpoints de la API**

- **Autenticación:**

  - `POST /api/auth/register`: Registro de usuarios.
  - `POST /api/auth/login`: Inicio de sesión.
  - `POST /api/auth/logout`: Cierre de sesión.
  - `GET /api/profile`: Perfil del usuario
  - `GET /api/verify`: verificacion de token

- **Eventos:**
  - `GET /api/events/:id`: Obtener evento por ID.
  - `GET /api/events/`: Obtener todos los eventos.
  - `POST /api/events/`: Crear evento.
  - `PUT /api/events/:id`: Actualizar evento.
  - `DELETE /api/events/:id`: Eliminar evento.

Para más detalles, consulta el [README del Backend](./backend/README.md).

---

## **Documentación del Frontend**

El frontend de la aplicación está construido con **React** y **TypeScript**. Proporciona una interfaz de usuario intuitiva para gestionar la autenticación y los eventos.

### **Estructura del Proyecto**

- **`src/`**: Carpeta principal de los archivos.
- **`api/`**: Elementos donde se ejecutan llamadas al backend
- **`components/`**: Componentes reutilizables en la app.
- **`config/`**: Configuracion de la app
- **`context/`**: Proveedor de datos a través del árbol de manera global atraves de componentes
- **`hooks/`**: Forma de reutilizar la lógica que vienen de los contextos
- **`img/`**: Donde se guardan las imagenes
- **`layouts/`**: Una base para renderizar los demas elementos
- **`pages/`**: Páginas principales de la aplicación.
- **`routes/`**: Donde se encuentra alojada las rutas de nuestra app y para verificacion de las rutas protegidas
- **`types/`**: Interfaces TypeScript para eventos y autenticación.

### **Funcionalidades**

- **Autenticación:**

  - Registro e inicio de sesión.
  - Protección de rutas con JWT.

- **Gestión de Eventos:**

  - Crear, editar, eliminar y listar eventos.
  - Filtrar eventos por fecha, hora o ubicación.

- **Otros:**
  - Modo nocturno
  - Notificaciones de acciones

Para más detalles, consulta el [README del Frontend](./frontend/README.md).

---

## **Funcionalidades Principales**

### **Autenticación**

- Registro de usuarios.
- Inicio y cierre de sesión.
- Verificacion de los tokens
- Protección de rutas con JWT.

### **Gestión de Eventos**

- Creación de eventos.
- Visualización de todos los eventos.
- Filtrado de eventos por fecha o ubicación.
- Actualización y eliminación de eventos.

---

## **Licencia**

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

¡Gracias por usar esta aplicación! 🚀
