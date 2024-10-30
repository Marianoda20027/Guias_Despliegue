# Usa una imagen de Node.js para construir y ejecutar la aplicación
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

# Expone el puerto en el que Next.js servirá la aplicación
EXPOSE 3000

# Inicia la aplicación
CMD ["npm", "start"]
