# Event Management API

API backend para gestión de eventos y usuarios con autenticación JWT, construida con Node.js, Express y MongoDB.

## 🚀 Características

- Registro y autenticación de usuarios con JWT
- CRUD completo de eventos
- Validación de datos con express-validator
- Middleware de autenticación para rutas protegidas
- Conexión a MongoDB con reintentos automáticos
- Seguridad: Bcrypt para contraseñas, CORS configurable
- TypeScript como lenguaje principal

## 🛠 Tecnologías

- **Runtime**: Node.js
- **Framework**: Express
- **Base de datos**: MongoDB + Mongoose
- **Autenticación**: JWT + bcrypt
- **Validación**: express-validator
- **Seguridad**: CORS, cookie-parser
- **Herramientas**: TypeScript, dotenv

## 📦 Instalación

1. Clonar repositorio:

```bash
git clone [URL_DEL_REPOSITORIO]
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno (crear archivo `.env` en raíz):

```env
PORT=3000
MONGODB_URL=mongodb://localhost:27017/nombre_db
JWT_SECRET=mi_secreto_super_seguro
ORIGIN=http://localhost:5173 # URL de tu frontend
```

4. Ejecutar servidor:

```bash
npm run dev
```

## 📄 Endpoints de la API

### 🔑 Autenticación (Users)

| Método | Ruta                     | Descripción                       |
| ------ | ------------------------ | --------------------------------- |
| POST   | /api/users/auth/register | Registro de usuario               |
| POST   | /api/users/auth/login    | Inicio de sesión                  |
| POST   | /api/users/auth/logout   | Cerrar sesión                     |
| GET    | /api/users/profile       | Perfil de usuario (requiere auth) |
| GET    | /api/users/verify        | Verificar token                   |

### 📅 Eventos

| Método | Ruta            | Descripción               |
| ------ | --------------- | ------------------------- |
| GET    | /api/events     | Obtener todos los eventos |
| GET    | /api/events/:id | Obtener evento por ID     |
| POST   | /api/events     | Crear nuevo evento        |
| PUT    | /api/events/:id | Actualizar evento         |
| DELETE | /api/events/:id | Eliminar evento           |

_Todas las rutas de eventos requieren autenticación_

## 🔧 Variables de Entorno

| Variable    | Descripción                    | Ejemplo                           |
| ----------- | ------------------------------ | --------------------------------- |
| PORT        | Puerto del servidor            | 3000                              |
| MONGODB_URL | URL de conexión a MongoDB      | mongodb://localhost:27017/db_name |
| JWT_SECRET  | Secreto para firmar tokens JWT | cadena_secreta                    |
| ORIGIN      | Dominios permitidos (CORS)     | http://localhost:5173             |

## 🛠 Estructura de Directorios

```
├── config/
│   ├── DB.ts          # Configuración de MongoDB
│   └── Process.ts     # Variables de entorno
├── controllers/
│   ├── EventController.ts  # Lógica de eventos
│   └── UserController.ts   # Lógica de usuarios
├── middleware/
│   └── index.ts       # Middlewares de autenticación y validación
├── models/
│   ├── EventModel.ts  # Modelo MongoDB para eventos
│   └── UserModel.ts   # Modelo MongoDB para usuarios
├── routes/
│   ├── EventRouter.ts # Rutas de eventos
│   └── UserRouter.ts  # Rutas de usuarios
├── utils/
│   └── auth.ts        # Funciones de autenticación
├── server.ts          # Configuración principal de Express
├── package.json       # Dependencias y scripts
└── tsconfig.json      # Configuración de TypeScript
```

## 📌 Uso Básico

```bash
# Registrar usuario
curl -X POST http://localhost:3000/api/users/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe", "email":"john@example.com", "password":"secret123"}'

# Login (obtener token)
curl -X POST http://localhost:3000/api/users/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com", "password":"secret123"}'

# Crear evento (usar token en cookies)
curl -X POST http://localhost:3000/api/events \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Concierto",
    "date":"2024-12-31",
    "time":"20:00",
    "location":"Madrid",
    "description":"Evento de año nuevo"
  }'
```

## 📄 Licencia

MIT License

```

```
