# 🎬 Movies API - Express

API RESTful desarrollada con Node.js y Express para la gestión de películas. Permite operaciones CRUD completas, validación de datos con Joi, manejo de errores, logs de llamada a los endpoints y persistencia de datos en un archivo JSON. Este repositorio resuelve la actividad Librerías de Backend con Node.js de la asignatura Desarrollo Avanzado de Backend y APIs del Máster de Desarrollo Web de la UEM.

# 🚀 Características principales

- CRUD completo de películas (GET, POST, PUT, DELETE)

- Validación de datos con Joi mediante la definición del schema de películas

- Middleware para logging (morgan), validación y manejo de errores

- Almacenamiento en archivo JSON

- Configuración mediante variables de entorno con dotenv

# 🔧 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/anggierz/movies-express.git
cd movies-express
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo .env en la raíz del proyecto basado en el archivo .env.example (por comodidad, el .env será proporcionado al profesor)

4. Inicia el servidor:

```bash
npm run start
```

# 🔍 Endpoints disponibles

- GET /movies

Obtener todas las películas

- POST /movies

Crear nueva película

- PUT /movies/:id

Actualizar película existente

- DELETE /movies/:id

Eliminar película

# 📊 Validaciones (Joi)

title: obligatorio, mínimo 3 caracteres

description: opcional

year: obligatorio, representa el año de publicación de la película. Debe estar entre el año 1900 y el año actual

rating: obligatorio, número entre 0 y 10

# 📁 Estructura del proyecto
movies-express/
├── controllers/             # Controladores de la lógica de negocio
│   └── moviesController.js
├── data/             # Carpeta donde se almacenará el JSON con los datos
├── logs/             # Carpeta donde se almacenan los logs de morgan
│   └── access.log
├── routes/                  # Definición de rutas de películas
│   └── moviesRoutes.js
├── services/                # Funciones de lectura y escritura en archivos JSON
│   └── fileService.js
├── validations/             # Validaciones de datos previas a la implementación de Joi
│   └── moviesValidations.js
├── middlewares.js           # Archivo que contiene los middlewares utilizados en la aplicación
├── schemas.js               # Archivo que contiene el schema Joi de películas
├── .env.example             # Variables de entorno de ejemplo
├── .gitignore               # Archivos y carpetas ignorados por Git
├── package.json             # Dependencias y configuración del proyecto
├── index.js                 # Punto de entrada de la aplicación
└── README.md                # Documentación del proyecto
