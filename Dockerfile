FROM node:16.14.0-slim AS build

# 区分不同的环境
ARG BUILD_ENV= dev

WORKDIR /app
COPY . /app

RUN npm install && npm run build:${BUILD_ENV}
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]