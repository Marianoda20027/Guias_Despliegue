# Usa una imagen de Node para construir la aplicación
FROM node:18 AS build

# Crea y establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración de dependencias
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el código fuente
COPY . .

# Construye la aplicación
RUN npm run build

# Usa una imagen ligera de Nginx para servir el contenido estático
FROM nginx:stable-alpine

# Copia los archivos generados en la carpeta 'build' a la ruta de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Inicia el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
