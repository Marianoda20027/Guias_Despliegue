# Etapa de construcción
FROM node:18-alpine AS builder
WORKDIR /app

# Copia los archivos de configuración y las dependencias
COPY package.json package-lock.json ./
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Construye la aplicación Next.js
RUN npm run build

# Etapa de producción
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/nginx.conf

# Copia los archivos estáticos generados en la construcción de Next.js
COPY --from=builder /app/.next /usr/share/nginx/html

# Expone el puerto 80 y ejecuta Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
