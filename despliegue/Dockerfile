# Usa una imagen de Node.js para construir la aplicación
FROM node:18-alpine AS builder

# Crea el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración y dependencias
COPY package.json package-lock.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación de Next.js
RUN npm run build

# Usa una imagen ligera de Nginx para servir la aplicación en producción
FROM nginx:stable-alpine

# Copia el build estático de Next.js al directorio que Nginx usa para servir contenido
COPY --from=builder /app/.next /usr/share/nginx/html

# Copia la configuración de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Expone el puerto 80 para servir la aplicación
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]
