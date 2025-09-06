### BACKEND

## Pasos para ejecutar la aplicación

- Clona el proyecto desde el repositorio: `git clone https://github.com/JonathanAlejandroTorres/MongoNodeReactBack.git`

- Ve al proyecto clonado

- Desde la terminal ejecuta el comando para copiar las variables del entorno `cp .env.example` .env (Configura las credenciales respectivas)

- Ejecuta `docker build -t nombre_imagen .`

- Corre la aplicacion con el comando de: `docker run -d -p puerto:puerto --name nombre_contendor nombre_imagen`

- Abre la aplicacion desde el navegador: `http://localhost:puerto`
