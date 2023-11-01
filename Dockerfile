# Étape 1 : Créer une image pour la construction
FROM node:latest AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --omit=dev


# Étape 2 : Créer une image légère pour l'exécution
FROM nginx:alpine

# Copier les fichiers de construction de l'étape précédente dans le répertoire nginx
COPY --from=build /app/dist/* /usr/share/nginx/html/
