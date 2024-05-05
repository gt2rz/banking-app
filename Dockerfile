# Dockerfile
# Stage 1 - the build process
FROM node:alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2 - the production environment
FROM node:alpine
WORKDIR /app
COPY --from=build /app ./
RUN npm install --production

EXPOSE 3000
CMD ["npm", "start"]